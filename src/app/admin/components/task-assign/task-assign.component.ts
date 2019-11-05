import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {RoleProvider} from '../../../commons/role-provider';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {CorpusFile} from '../../../api/models/corpus-file';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {SelectionModel} from '@angular/cdk/collections';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AnnotatorProfile} from '../../../api/models/annotator-profile';
import {TasksAssignment} from '../../../api/models';

@Component({
  selector: 'seshat-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.scss']
})
export class TaskAssignComponent implements OnInit {
  campaignSlug: string;
  displayedColumns: string[] = ['select', 'path', 'assigned_tasks'];
  corpusFilesDataSource: MatTableDataSource<CorpusFile>;
  selectedFiles = new SelectionModel<CorpusFile>(true, []);
  annotatorsList: Array<AnnotatorProfile> = [];
  minDeadline = new Date();
  deadline: Date;
  firstAnnotatorCtrl = new FormControl();
  firstAutoCompleteFiltered = new Observable<AnnotatorProfile[]>();
  secondAnnotatorCtrl = new FormControl();  // not set for a Single Annot task
  secondAutoCompleteFiltered = new Observable<AnnotatorProfile[]>();
  taskType: string;
  constructor(
    private taskService: TasksService,
    private annotatorsService: AnnotatorsService,
    private campaignService: CampaignsService,
    private roleProvider: RoleProvider,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.firstAutoCompleteFiltered = this.firstAnnotatorCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filterAnnotator(name) : this.annotatorsList.sort())
      );
    this.secondAutoCompleteFiltered = this.secondAnnotatorCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => value ? (typeof value === 'string' ? value : value.name) : undefined),
        map(name => name ? this._filterAnnotator(name) : this.annotatorsList.sort())
      );
  }

  ngOnInit() {
    this.campaignSlug = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignService.campaignsFilesListCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
      (data) => {
        this.corpusFilesDataSource = new MatTableDataSource<CorpusFile>(data);
      }
    );
    this.annotatorsService.annotatorsListGet().subscribe(
      (data) => {
        this.annotatorsList = data;
      }
    );
  }

  // Methods dedicated to the files table

  applyFilter(filterValue: string) {
    this.corpusFilesDataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectedFiles.selected.length;
    const numRows = this.corpusFilesDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selectedFiles.clear() :
      this.corpusFilesDataSource.data.forEach(row => this.selectedFiles.select(row));
  }

  // Methods dedicated to the annotator autocompletion

  autoCompleteDisplay(annotator: AnnotatorProfile) {
    return annotator ? annotator.username : undefined;
  }

  private _filterAnnotator(value: string) {
    const filterValue = value.toLocaleLowerCase();

    return this.annotatorsList.filter(
      annotator => annotator.fullname.toLowerCase().includes(filterValue)
        ||   annotator.username.includes(filterValue));
  }

  submitAssigment() {
    const assignment = {
      audio_files: this.selectedFiles.selected.map(file => file.path),
      deadline: this.deadline? this.deadline.toISOString() : undefined,
      campaign: this.campaignSlug,
    } as TasksAssignment;
    // TODO: check that annotators are not none or both the same for double annotator
    if (this.taskType === 'single') {
      assignment.single_annot_assign = {annotator: this.firstAnnotatorCtrl.value.username};
    } else {
      assignment.double_annot_assign = {
        reference: this.firstAnnotatorCtrl.value.username,
        target: this.secondAnnotatorCtrl.value.username
      };
    }
    this.taskService.tasksAssignPost({body: assignment}).subscribe(
      () => {
        // TODO : add toast
        this.router.navigate(['/admin', 'campaign', this.campaignSlug]);
      }
    );
  }
}

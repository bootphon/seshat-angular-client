import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {RoleProvider} from '../../../commons/role-provider';
import {TasksAssignment} from '../../../api/models/tasks-assignment';
import {ActivatedRoute} from '@angular/router';
import {MatAutocompleteSelectedEvent, MatTableDataSource} from '@angular/material';
import {CorpusFile} from '../../../api/models/corpus-file';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {AnnotatorShortProfile} from '../../../api/models/annotator-short-profile';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'seshat-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.scss']
})
export class TaskAssignComponent implements OnInit {
  campaignSlug: string;
  tasksAssignment: TasksAssignment;
  displayedColumns: string[] = ['select', 'filename', 'assigned_tasks'];
  corpusFilesDataSource: MatTableDataSource<CorpusFile>;
  selectedFiles = new SelectionModel<CorpusFile>(true, []);
  annotatorsList: Array<AnnotatorShortProfile> = [];
  minDeadline = new Date();
  deadline: Date;
  firstAnnotator: string;
  secondAnnotator: string; // not set for a Single Annot task
  taskType: string;
  constructor(
    private taskService: TasksService,
    private annotatorsService: AnnotatorsService,
    private campaignService: CampaignsService,
    private roleProvider: RoleProvider,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.campaignSlug = this.route.snapshot.paramMap.get('campaign_slub');
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

  // Methods dedicated to the annotator table

  firstUserSelect(event : MatAutocompleteSelectedEvent){
    // TODO
  }

  secondUserSelect(event : MatAutocompleteSelectedEvent){
    // TODO
  }

  submitAssigment(){
    // TODO
  }
}

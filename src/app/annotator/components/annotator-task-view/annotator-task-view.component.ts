import {Component, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {TaskFullStatusAnnotator} from '../../../api/models/task-full-status-annotator';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TextGridErrors} from '../../../api/models/text-grid-errors';
import {MatHorizontalStepper, MatSnackBar, MatTableDataSource} from '@angular/material';
import {TimeMergeError} from '../../../api/models/time-merge-error';
import {DownloadsService} from '../../../api/services';


@Component({
  selector: 'seshat-annotator-task-view',
  templateUrl: './annotator-task-view.component.html',
  styleUrls: ['./annotator-task-view.component.scss']
})
export class AnnotatorTaskViewComponent implements OnInit {
  taskData: TaskFullStatusAnnotator;
  taskId: string;
  uploadForm: FormGroup;
  tgErrors: TextGridErrors;
  timesMergeMismatch = new MatTableDataSource<TimeMergeError>();

  @ViewChild('stepper', {static: true}) public stepper: MatHorizontalStepper;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private downloadsService: DownloadsService
  ) {
  }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('task_id');
    this.loadTaskStatus();
    this.uploadForm = this.formBuilder.group({
      tgFile: [Validators.required]
    });
  }

  loadTaskStatus() {
    this.tasksService.tasksStatusAnnotatorTaskIdGet({taskId: this.taskId}).subscribe(
      (data) => {
        this.taskData = data;
        if (data.double_annot_data && data.double_annot_data.frontiers_merge_table) {
          this.timesMergeMismatch = new MatTableDataSource<TimeMergeError>(data.double_annot_data.frontiers_merge_table);
        }
      }
    );
  }

  uploadTextGrid(uploadType: 'submit' | 'validate', tgContent: string) {

    if (uploadType === 'validate') {
      this.tasksService.tasksValidateTaskIdPost({taskId: this.taskId, body: {textgrid_str: tgContent}}).subscribe(
        (data) => {
          this.tgErrors = data;
        }
      );
    } else {
      this.tasksService.tasksSubmitTaskIdPost({taskId: this.taskId, body: {textgrid_str: tgContent}}).subscribe(
        (data) => {
          this.tgErrors = data;
          if (!this.tgErrors) {
            this.loadTaskStatus();
          }
        }
      );
    }
  }

  loadAndSendTextGrid(uploadType: 'submit' | 'validate') {
    const file: File = this.uploadForm.get('tgFile').value.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      const result = myReader.result;
      if (!(result instanceof ArrayBuffer)) {
        if (!result) {
          this.notifyEmptyTg();
          return;
        }
        this.uploadTextGrid(uploadType, result);
      }
    };

    myReader.readAsText(file);
  }

  notifyEmptyTg() {
    this.snackBar.open('You have to specify a TextGrid file for validation',
      'Error',
      {verticalPosition: 'top', duration: 10 * 1000});
  }

  updateProgress(){
    if (this.taskData.current_step_idx === 0) {
      this.taskData.current_step_idx = 1;
    }
  }
  downloadStarter() {
    this.updateProgress();
    this.downloadsService.downloadsTaskTaskIdStarterGet({taskId: this.taskId}).subscribe();
  }
  downloadCurrentTextGridTemplate() {
    this.updateProgress();
    this.downloadsService.downloadsTaskTaskIdCurrentTextgridGet({taskId: this.taskId}).subscribe();
  }



}

import { Component, OnInit } from '@angular/core';
import {TaskFullAnnotator} from '../../../api/models/task-full-annotator';
import {TasksService} from '../../../api/services/tasks.service';

@Component({
  selector: 'seshat-annotator-task-view',
  templateUrl: './annotator-task-view.component.html',
  styleUrls: ['./annotator-task-view.component.scss']
})
export class AnnotatorTaskViewComponent implements OnInit {
  taskData: TaskFullAnnotator;
  constructor(private tasksAPI: TasksService) { }

  ngOnInit() {
    // TODO: retrieve task id from url args
  }
  validateTextGrid() {}
  submitTextGrid() {}

}

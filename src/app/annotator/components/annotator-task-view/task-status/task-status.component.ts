import {Component, Input, OnInit} from '@angular/core';
import {TaskFullStatusAnnotator} from '../../../../api/models/task-full-status-annotator';

@Component({
  selector: 'seshat-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss']
})
export class TaskStatusComponent implements OnInit {
  @Input() taskData: TaskFullStatusAnnotator;
  constructor() { }

  ngOnInit() {
  }

}

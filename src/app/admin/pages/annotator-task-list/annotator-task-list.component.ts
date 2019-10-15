import {Component, Input, OnInit} from '@angular/core';
import {TaskShort} from '../../../api/models/task-short';

@Component({
  selector: 'seshat-annotator-task-list',
  templateUrl: './annotator-task-list.component.html',
  styleUrls: ['./annotator-task-list.component.scss']
})
export class AnnotatorTaskListComponent implements OnInit {
  @Input() taskList: Array<TaskShort>;
  constructor() { }

  ngOnInit() {
  }

}

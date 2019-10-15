import { Component, OnInit } from '@angular/core';
import {TasksService} from '../../api/services/tasks.service';
import {TaskShort} from '../../api/models/task-short';

@Component({
  selector: 'seshat-annotator-assigned-tasks',
  templateUrl: './annotator-assigned-tasks.component.html',
  styleUrls: ['./annotator-assigned-tasks.component.scss']
})
export class AnnotatorAssignedTasksComponent implements OnInit {
  tasksList: Array<TaskShort>;
  constructor(private tasksAPI: TasksService) { }

  ngOnInit() {
  }

}

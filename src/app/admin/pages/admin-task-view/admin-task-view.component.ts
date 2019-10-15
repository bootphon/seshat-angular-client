import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {TaskFullAdmin} from '../../../api/models/task-full-admin';

@Component({
  selector: 'seshat-admin-task-view',
  templateUrl: './admin-task-view.component.html',
  styleUrls: ['./admin-task-view.component.scss']
})
export class AdminTaskViewComponent implements OnInit {
  @Input() taskID?: string;
  taskData: TaskFullAdmin;
  constructor(private tasksAPI: TasksService) { }

  ngOnInit() {
    // TODO: retrieve task_id from url if not set as input
  }
  downloadTextGrids() {}
  deleteTask() {}
  lockTask() {}
  unlockTask() {}

}

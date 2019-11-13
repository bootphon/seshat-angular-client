import {Component, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TaskShortStatus} from '../../../api/models/task-short-status';

@Component({
  selector: 'seshat-annotator-assigned-tasks',
  templateUrl: './annotator-assigned-tasks.component.html',
  styleUrls: ['./annotator-assigned-tasks.component.scss']
})
export class AnnotatorAssignedTasksComponent implements OnInit {
  assignedTasksList = new MatTableDataSource<TaskShortStatus>();
  finishedTasksList = new MatTableDataSource<TaskShortStatus>();
  assignedColumns: string[] = ['file', 'type', 'status', 'deadline'];
  finishedColumns: string[] = ['file', 'type', 'status', 'finish-date'];

  @ViewChild('assignedTasksSort', {static: true}) public assignedTasksSort: MatSort;
  @ViewChild('finishedTasksSort', {static: true}) public finishedTasksSort: MatSort;

  constructor(private tasksAPI: TasksService) {
  }

  ngOnInit() {
    this.assignedTasksList.sort = this.assignedTasksSort;
    this.finishedTasksList.sort = this.finishedTasksSort;
    this.tasksAPI.tasksListAssignedGet().subscribe(
      (data) => {
        this.assignedTasksList = new MatTableDataSource<TaskShortStatus>(data.filter(
          task => !task.is_done)
        );
        this.finishedTasksList = new MatTableDataSource<TaskShortStatus>(data.filter(
          task => task.is_done)
        );
      }
    );
  }

}

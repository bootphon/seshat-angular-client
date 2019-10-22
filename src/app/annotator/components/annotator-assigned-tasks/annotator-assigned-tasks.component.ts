import {Component, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {TaskShort} from '../../../api/models/task-short';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'seshat-annotator-assigned-tasks',
  templateUrl: './annotator-assigned-tasks.component.html',
  styleUrls: ['./annotator-assigned-tasks.component.scss']
})
export class AnnotatorAssignedTasksComponent implements OnInit {
  assignedTasksList: MatTableDataSource<TaskShort>;
  finishedTasksList: MatTableDataSource<TaskShort>;
  assignedColumns: string[] = ['view', 'file', 'type', 'status', 'deadline'];
  finishedColumns: string[] = ['view', 'file', 'type', 'status', 'finish-date'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tasksAPI: TasksService) { }

  ngOnInit() {
    this.assignedTasksList.sort = this.sort;
    this.finishedTasksList.sort = this.sort;
    // TODO: retrieve tasks, and filter them into the two respective lists, based on their status
    //  filter out locked tasks
  }

}

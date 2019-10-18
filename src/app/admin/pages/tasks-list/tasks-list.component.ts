import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {TaskShort} from '../../../api/models/task-short';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'seshat-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  taskColumns: string[] = ['view', 'file', 'annotators', 'type', 'deadline', 'status', 'actions'];
  tasks: MatTableDataSource<TaskShort>;
  @Input() tasksList: Array<TaskShort>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasks.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }

  deleteTask(task: TaskShort) {
    // TODO
  }
  lockTask(task: TaskShort) {
    // TODO
  }
  unlockTask(task: TaskShort) {
    // TODO
  }
  viewTask(task: TaskShort) {
    // TODO
  }

}

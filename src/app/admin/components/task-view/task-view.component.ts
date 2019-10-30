import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute} from '@angular/router';
import {TaskFullStatusAdmin} from '../../../api/models/task-full-status-admin';
import {MatTableDataSource} from '@angular/material';
import {TaskTextGrid} from '../../../api/models';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'seshat-admin-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Input() taskID?: string;
  taskData: TaskFullStatusAdmin;
  displayedColumns = ['select', 'name', 'is_done', 'creator', 'created'];
  textgridDataSource = new MatTableDataSource<TaskTextGrid>();
  tgSelection = new SelectionModel<TaskTextGrid>(true, []);
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    if (!this.taskID) {
      this.taskID = this.route.snapshot.paramMap.get('task_id');
    }
    this.tasksService.tasksStatusAdminTaskIdGet({taskId: this.taskID}).subscribe(
      (data) => {
        this.taskData = data;
        this.textgridDataSource = new MatTableDataSource<TaskTextGrid>(this.taskData.textgrids);
      }
    );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.tgSelection.selected.length;
    const numRows = this.textgridDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.tgSelection.clear() :
      this.textgridDataSource.data.forEach(row => this.tgSelection.select(row));
  }

  downloadTextGrids() {}
  deleteTask() {}
  changeTaskLock() {}
}

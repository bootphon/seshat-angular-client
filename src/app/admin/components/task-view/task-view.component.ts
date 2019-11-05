import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskFullStatusAdmin} from '../../../api/models/task-full-status-admin';
import {MatSnackBar, MatTableDataSource} from '@angular/material';
import {TaskTextGrid} from '../../../api/models';
import {SelectionModel} from '@angular/cdk/collections';
import {DownloadsService} from '../../../api/services/downloads.service';

@Component({
  selector: 'seshat-admin-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Input() taskID?: string;
  taskData: TaskFullStatusAdmin;
  displayedColumns = ['select', 'download', 'delete', 'name', 'is_done', 'creator', 'created'];
  textgridDataSource = new MatTableDataSource<TaskTextGrid>();
  tgSelection = new SelectionModel<TaskTextGrid>(true, []);

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private downloadsService: DownloadsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.taskData = {assigner: {}} as TaskFullStatusAdmin;
  }

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

  downloadTextGrids() {
    if (this.tgSelection.hasValue()) {
      const tgNames = this.tgSelection.selected.map(tg => tg.name);
      this.downloadsService.downloadsTaskTaskIdTextgridsGet(
        {taskId: this.taskID, body: {names: tgNames}});
    } else {
      this.snackBar.open('No file selected!', 'Task Files Download',
        {verticalPosition: 'top', duration: 3 * 1000});
    }
  }

  deleteTask() {
    this.tasksService.tasksDeleteTaskIdDelete({taskId: this.taskID}).subscribe(
      () => {
        this.snackBar.open(`Task for file ${this.taskData.filename} deleted!`,
          'Task Deletion',
          {verticalPosition: 'top', duration: 3 * 1000});
        this.router.navigate(['/admin', 'campaign', this.taskData.campaign.slug]);
      }
    );
  }

  changeTaskLock() {
    this.tasksService.tasksLockPost({body: {task_id: this.taskID, lock_status: !this.taskData.is_locked}}).subscribe(
      () => {
        this.taskData.is_locked = !this.taskData.is_locked;
      }
    );
  }

  deleteTaskTextGrid(tg: TaskTextGrid) {
    this.tasksService.tasksDeleteTaskIdTextgridTgNameDelete({taskId: this.taskID, tgName: tg.name}).subscribe(
      () => {
        tg.is_done = false;
        tg.created = null;
        tg.creators = null;
        tg.id = null;
        this.snackBar.open(`Textgrid file ${tg.name} deleted!`, 'Textgrid Deletion',
          {verticalPosition: 'top', duration: 3 * 1000});
      }
    );
  }

  downloadTaskTextGrid(tg: TaskTextGrid) {
    this.downloadsService.downloadsTaskTaskIdTextgridsGet(
      {taskId: this.taskID, body: {names: [tg.name]}});
  }
}

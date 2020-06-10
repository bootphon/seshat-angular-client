import {Component, Input, OnInit} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskFullStatusAdmin} from '../../../api/models/task-full-status-admin';
import {MatDialog, MatSnackBar, MatTableDataSource} from '@angular/material';
import {TaskTextGrid} from '../../../api/models';
import {SelectionModel} from '@angular/cdk/collections';
import {DownloadsService} from '../../../api/services';
import {ConfirmationDialogComponent} from '../../../commons/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'seshat-admin-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  @Input() taskID?: string;
  taskData: TaskFullStatusAdmin;
  displayedColumns = ['name', 'has_been_submitted', 'creator', 'created', 'delete'];
  textgridDataSource = new MatTableDataSource<TaskTextGrid>();

  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private downloadsService: DownloadsService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

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

  downloadTextGrids() {
    this.downloadsService.downloadsTaskTaskIdTextgridsGet({taskId: this.taskID}).subscribe();
  }

  deleteTask() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: `Do you confirm the deletion of task for file ${this.taskData.filename}?`
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.tasksService.tasksDeleteTaskIdDelete({taskId: this.taskID}).subscribe(
            () => {
              this.snackBar.open(`Task for file ${this.taskData.filename} deleted!`,
                'Task Deletion',
                {verticalPosition: 'top', duration: 3 * 1000});
              this.router.navigate(['/admin', 'campaign', this.taskData.campaign.slug]);
            }
          );
        }
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
        tg.has_been_submitted = false;
        tg.created = null;
        tg.creators = null;
        tg.id = null;
        this.snackBar.open(`Textgrid file ${tg.name} deleted!`, 'Textgrid Deletion',
          {verticalPosition: 'top', duration: 3 * 1000});
      }
    );
  }
}

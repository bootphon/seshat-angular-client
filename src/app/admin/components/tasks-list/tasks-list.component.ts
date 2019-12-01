import {Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {Router} from '@angular/router';
import {TaskShortStatus} from '../../../api/models/task-short-status';
import {SelectionModel} from '@angular/cdk/collections';
import {ConfirmationDialogComponent} from '../../../commons/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'seshat-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit, OnChanges {
  taskColumns: string[] = [];
  tasks: MatTableDataSource<TaskShortStatus>;
  tasksSelection = new SelectionModel<TaskShortStatus>(true, []);
  @Input() campaignSlug: string;
  @Input() annotatorUsername: string;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private tasksService: TasksService,
    private campaignsService: CampaignsService,
    private annotatorsService: AnnotatorsService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.tasks = new MatTableDataSource<TaskShortStatus>();
  }

  public refreshTaskList() {
    if (this.campaignSlug) {
      this.taskColumns = ['select', 'filename', 'annotators', 'task_type', 'deadline', 'step', 'is_locked', 'delete-action'];
      this.campaignsService.campaignsListTasksCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
        (data) => {
          this.tasks = new MatTableDataSource<TaskShortStatus>(data);
          this.tasks.sort = this.sort;
        }
      );
    } else {
      this.taskColumns = ['select', 'filename', 'campaign', 'annotators', 'task_type', 'deadline', 'step', 'is_locked', 'delete-action'];
      this.annotatorsService.annotatorsListTasksUsernameGet({username: this.annotatorUsername}).subscribe(
        (data) => {
          this.tasks = new MatTableDataSource<TaskShortStatus>(data);
          this.tasks.sort = this.sort;
        }
      );
    }
    this.tasks.sort = this.sort;
  }

  ngOnInit() {
    this.refreshTaskList();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.tasksSelection.selected.length;
    const numRows = this.tasks.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.tasksSelection.clear() :
      this.tasks.data.forEach(row => this.tasksSelection.select(row));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshTaskList();
  }

  applyFilter(filterValue: string) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }

  deleteTask(task: TaskShortStatus) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: `Do you confirm the deletion of task for file ${task.filename}?`
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.tasksService.tasksDeleteTaskIdDelete({taskId: task.id}).subscribe(
            () => {
              this.tasks.data = this.tasks.data.filter(filteredTask => task.id !== filteredTask.id);
              this.tasks.filter = '';
            }
          );
        }
      }
    );

  }

  deleteSelectedTasks() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: `Do you confirm the deletion of ${this.tasksSelection.selected.length} tasks?`
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.tasksService.tasksDeleteListDelete({body: {task_ids: this.tasksSelection.selected.map(task => task.id)}})
            .subscribe( () => {
                this.tasks.data = this.tasks.data.filter(filteredTask => !this.tasksSelection.selected.includes(filteredTask));
                this.tasks.filter = '';
              }
            );
        }
      }
    );

  }

  changeTaskLock(task: TaskShortStatus) {
    this.tasksService.tasksLockPost({body: {task_id: task.id, lock_status: !task.is_locked}}).subscribe(
      () => {
        task.is_locked = !task.is_locked;
      }
    );
  }

  viewTask(task: TaskShortStatus) {
    this.router.navigate(['/admin', 'tasks', 'view', task.id]);
  }

}

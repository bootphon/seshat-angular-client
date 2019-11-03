import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {Router} from '@angular/router';
import {TaskShortStatus} from '../../../api/models/task-short-status';

@Component({
  selector: 'seshat-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  taskColumns: string[] = ['file', 'annotators', 'type', 'deadline', 'status', 'lock-action', 'delete-action'];
  tasks: MatTableDataSource<TaskShortStatus>;
  @Input() campaignSlug: string;
  @Input() annotatorUsername: string;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private tasksService: TasksService,
    private campaignsService: CampaignsService,
    private annotatorsService: AnnotatorsService,
    private router: Router
  ) {
    this.tasks = new MatTableDataSource<TaskShortStatus>();
  }
  public refreshTaskList() {
    if (this.campaignSlug) {
      this.campaignsService.campaignsListTasksCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
        (data) => this.tasks = new MatTableDataSource<TaskShortStatus>(data)
      );
    } else {
      this.annotatorsService.annotatorsListTasksUsernameGet({username: this.annotatorUsername}).subscribe(
        (data) => this.tasks = new MatTableDataSource<TaskShortStatus>(data)
      );
    }
    this.tasks.sort = this.sort;
  }

  ngOnInit() {
    this.refreshTaskList();
  }

  applyFilter(filterValue: string) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }

  deleteTask(task: TaskShortStatus) {
    this.tasksService.tasksDeleteTaskIdDelete({taskId: task.id}).subscribe(
      () => {
        this.tasks.data.filter(filteredTask => task.id !== filteredTask.id);
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

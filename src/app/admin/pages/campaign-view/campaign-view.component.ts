import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {CampaignFull} from '../../../api/models/campaign-full';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TaskShort} from '../../../api/models/task-short';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {TasksService} from '../../../api/services/tasks.service';

@Component({
  selector: 'seshat-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  taskColumns: string[] = ['view', 'file', 'annotators', 'type', 'deadline', 'status', 'actions'];
  campaign: CampaignFull;
  tasks: MatTableDataSource<TaskShort>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private campaignsService: CampaignsService, tasksService: TasksService) { }

  ngOnInit() {
    this.tasks.sort = this.sort;
    // TODO : fetch the campaign slug from the URL path
  }

  applyFilter(filterValue: string) {
    this.tasks.filter = filterValue.trim().toLowerCase();
  }

  deleteTask(task: TaskShort) {}
  lockTask(task: TaskShort) {}
  unlockTask(task: TaskShort) {}
  viewTask(task: TaskShort) {}
}

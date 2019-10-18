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
  campaign: CampaignFull;

  constructor(private campaignsService: CampaignsService, tasksService: TasksService) { }

  ngOnInit() {
    // TODO : fetch the campaign slug from the URL path
  }

}

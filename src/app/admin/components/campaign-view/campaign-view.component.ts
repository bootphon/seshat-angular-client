import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {CampaignFull} from '../../../api/models/campaign-full';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TaskShort} from '../../../api/models/task-short';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {TasksService} from '../../../api/services/tasks.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'seshat-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  campaign: CampaignFull;

  constructor(private campaignsService: CampaignsService,
              private tasksService: TasksService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const campaignSlug: string = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignsService.campaignsViewCampaignSlugGet({campaignSlug}).subscribe(
      (data) => this.campaign = data
    );
  }

}

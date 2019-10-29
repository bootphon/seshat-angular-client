import { Component, OnInit } from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CampaignStatus} from '../../../api/models/campaign-status';

@Component({
  selector: 'seshat-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {
  campaignsList: Array<CampaignStatus>;
  constructor(private campaignsAPI: CampaignsService) { }

  ngOnInit() {
    this.campaignsAPI.campaignsListGet().subscribe(
      (data) => this.campaignsList = data,
      (err) => console.log('Error retrieving campaign list'),
    );
  }

}

import { Component, OnInit } from '@angular/core';
import {CampaignShort} from '../../../api/models/campaign-short';
import {CampaignsService} from '../../../api/services/campaigns.service';

@Component({
  selector: 'seshat-campaigns-list',
  templateUrl: './campaigns-list.component.html',
  styleUrls: ['./campaigns-list.component.scss']
})
export class CampaignsListComponent implements OnInit {
  campaignsList: Array<CampaignShort>;
  constructor(private campaignsAPI: CampaignsService) { }

  ngOnInit() {
    this.campaignsAPI.campaignsListGet().subscribe(
      (data) => this.campaignsList = data,
      (err) => console.log('Error retrieving corpora'),
    );
  }

}

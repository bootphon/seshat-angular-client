import { Component, OnInit } from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CorporaListing} from '../../../api/models/corpora-listing';

@Component({
  selector: 'seshat-campaign-creation',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.scss']
})
export class CampaignCreationComponent implements OnInit {
  campaignName: string;
  campaignDescription: string;
  chosenCorpora: string;
  availableCorpora: CorporaListing;
  constructor(private campaignsAPI: CampaignsService) { }

  ngOnInit() {
    // TODO: fetch available corpora
  }

}

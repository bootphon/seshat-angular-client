import { Component, OnInit } from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {ActivatedRoute} from '@angular/router';
import {CampaignShortProfile} from '../../../api/models/campaign-short-profile';
import {CampaignWikiPage} from '../../../api/models/campaign-wiki-page';

@Component({
  selector: 'seshat-annotator-wiki-view',
  templateUrl: './annotator-wiki-view.component.html',
  styleUrls: ['./annotator-wiki-view.component.scss']
})
export class AnnotatorWikiViewComponent implements OnInit {
  campaignWikiData: CampaignWikiPage;
  constructor(
    private campaignsAPI: CampaignsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const campaignSlug = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignsAPI.campaignsWikiViewCampaignSlugGet({campaignSlug: campaignSlug}).subscribe(
      (data) => {
        this.campaignWikiData = data;
      }
    );
  }

}

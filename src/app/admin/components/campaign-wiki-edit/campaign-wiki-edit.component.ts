import { Component, OnInit, Input} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'seshat-campaign-wiki-edit',
  templateUrl: './campaign-wiki-edit.component.html',
  styleUrls: ['./campaign-wiki-edit.component.scss']
})
export class CampaignWikiEditComponent implements OnInit {
  wikiContent: string;
  lastEdit: string;
  campaignSlug: string;
  constructor(
    private campaignsService: CampaignsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.campaignSlug = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignsService.campaignsWikiViewCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
      (data) => {
        this.wikiContent = data.content;
        this.lastEdit = data.last_edit;
      }
    );
  }
  saveWiki() {
    this.campaignsService.campaignsWikiUpdateCampaignSlugPost(
      {campaignSlug: this.campaignSlug, body: {content : this.wikiContent}}).subscribe(
      () => {
        // TODO display toast to give the user some feedback
      }
    );
  }
}

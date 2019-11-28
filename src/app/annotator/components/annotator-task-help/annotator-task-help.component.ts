import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {ActivatedRoute} from '@angular/router';
import {CampaignWikiPage} from '../../../api/models/campaign-wiki-page';

@Component({
  selector: 'seshat-annotator-wiki-view',
  templateUrl: './annotator-task-help.component.html',
  styleUrls: ['./annotator-task-help.component.scss']
})
export class AnnotatorTaskHelpComponent implements OnInit {
  campaignWikiData: CampaignWikiPage;

  constructor(
    private campaignsService: CampaignsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const campaignSlug = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignsService.campaignsWikiViewCampaignSlugGet({campaignSlug: campaignSlug}).subscribe(
      (data) => {
        this.campaignWikiData = data;
      }
    );
  }

}

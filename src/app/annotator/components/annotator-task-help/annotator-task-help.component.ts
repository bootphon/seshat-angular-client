import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {ActivatedRoute} from '@angular/router';
import {CampaignWikiPage} from '../../../api/models/campaign-wiki-page';
import {CheckingSchemeSummary} from '../../../api/models/checking-scheme-summary';
import {TierSpecifications} from '../../../api/models/tier-specifications';
import {QuickCheckResponse} from '../../../api/models/quick-check-response';

interface TierSpecsHelp extends TierSpecifications, QuickCheckResponse{
  annot: string ;
}

interface CheckingSchemeHelp extends CheckingSchemeSummary {
  tier_specs: TierSpecsHelp[];
}

@Component({
  selector: 'seshat-annotator-wiki-view',
  templateUrl: './annotator-task-help.component.html',
  styleUrls: ['./annotator-task-help.component.scss']
})
export class AnnotatorTaskHelpComponent implements OnInit {
  campaignWikiData: CampaignWikiPage;
  checkingSchemeData: CheckingSchemeHelp;
  campaignSlug: string;
  constructor(
    private campaignsService: CampaignsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.campaignSlug = this.route.snapshot.paramMap.get('campaign_slug');
    this.campaignsService.campaignsWikiViewCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
      (data) => {
        this.campaignWikiData = data;
      }
    );
    this.campaignsService.campaignsCheckingSchemeCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
      (data) => {
        data.tier_specs = data.tier_specs.map(ts => ts as TierSpecsHelp);
        this.checkingSchemeData = data as CheckingSchemeHelp;
      }
    );
  }

  quickcheckAnnotation(tierSpecs: TierSpecsHelp){
    this.campaignsService.campaignsQuickcheckCampaignSlugGet(
      {campaignSlug: this.campaignSlug,
        body : { annotation: tierSpecs.annot, tier_name: tierSpecs.name}}).subscribe(
      (data) => {
          tierSpecs.error_msg = data.error_msg;
          tierSpecs.is_valid = data.is_valid;
      }
    );
  }

}

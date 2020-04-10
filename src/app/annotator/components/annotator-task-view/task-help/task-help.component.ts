import {Component, Input, OnInit} from '@angular/core';
import {CampaignsService} from '../../../../api/services/campaigns.service';
import {CampaignWikiPage} from '../../../../api/models/campaign-wiki-page';
import {CheckingSchemeSummary} from '../../../../api/models/checking-scheme-summary';
import {TierSpecifications} from '../../../../api/models/tier-specifications';
import {QuickCheckResponse} from '../../../../api/models/quick-check-response';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';




export class QuickCheckErrorStateMatcher implements ErrorStateMatcher {
  constructor(private tierSpecs: TierSpecsHelp) {
  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    console.log('in statematcher');
    console.log(this.tierSpecs !== undefined && !this.tierSpecs.is_valid);
    return this.tierSpecs !== undefined && !this.tierSpecs.is_valid;
  }
}

interface TierSpecsHelp extends TierSpecifications, QuickCheckResponse{
  annot: string ;
  matcher: QuickCheckErrorStateMatcher;
}

interface CheckingSchemeHelp extends CheckingSchemeSummary {
  tier_specs: TierSpecsHelp[];
}


@Component({
  selector: 'seshat-task-help',
  templateUrl: './task-help.component.html',
  styleUrls: ['./task-help.component.scss']
})
export class TaskHelpComponent implements OnInit {
  @Input() campaignSlug: string;
  campaignWikiData: CampaignWikiPage;
  checkingSchemeData: CheckingSchemeHelp;
  constructor(
    private campaignsService: CampaignsService,
  ) {
  }

  ngOnInit() {
    this.campaignsService.campaignsWikiViewCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
      (data) => {
        this.campaignWikiData = data;
      }
    );
    this.campaignsService.campaignsCheckingSchemeCampaignSlugGet({campaignSlug: this.campaignSlug}).subscribe(
      (data) => {
        data.tier_specs = data.tier_specs.map(ts => ts as TierSpecsHelp);
        this.checkingSchemeData = data as CheckingSchemeHelp;
        this.checkingSchemeData.tier_specs.forEach(value => value.matcher = new QuickCheckErrorStateMatcher(value));
      }
    );
  }

  quickcheckAnnotation(tierSpecs: TierSpecsHelp) {
    console.log(tierSpecs);
    this.campaignsService.campaignsQuickcheckCampaignSlugPost(
      {campaignSlug: this.campaignSlug,
        body : { annotation: tierSpecs.annot, tier_name: tierSpecs.name}}).subscribe(
      (data) => {
          tierSpecs.error_msg = data.error_msg;
          tierSpecs.is_valid = data.is_valid;
          console.log(tierSpecs);
      }
    );
  }

}

import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CorporaListing} from '../../../api/models/corpora-listing';
import {CampaignCreation} from '../../../api/models/campaign-creation';
import {Router} from '@angular/router';
import {TierSpecifications} from '../../../api/models/tier-specifications';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';

interface CorporaSelection {
  corporaType: string;
  corporaName: string;
}

@Component({
  selector: 'seshat-campaign-creation',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.scss']
})
export class CampaignCreationComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  campaignName: string;
  campaignDescription: string;
  chosenCorpora: CorporaSelection;
  campaignCreation: CampaignCreation;
  availableCorpora: CorporaListing;
  constructor(
    private campaignsAPI: CampaignsService,
    private router: Router) {
    this.campaignCreation = {
      name : '',
      enable_audio_dl: false,
      check_textgrids: false,
      checking_scheme : []
    };
  }

  ngOnInit() {
    // retrieving available corpora
    this.campaignsAPI.campaignsAvailableCorporaGet().subscribe((data) => this.availableCorpora = data);
  }
  createCampaign() {
    if (!this.chosenCorpora) {
      return;
    }
    if (this.chosenCorpora.corporaType === 'csv') {
      this.campaignCreation.data_csv = this.chosenCorpora.corporaName;
    } else {
      this.campaignCreation.data_folder = this.chosenCorpora.corporaName;
    }
    this.campaignsAPI.campaignsAdminPost({body: this.campaignCreation}).subscribe(
      (data) => this.router.navigate(['/admin', 'campaign', data.slug])
    );
  }
  addTier() {
    this.campaignCreation.checking_scheme.push({
      name: '',
      required: true,
      validate_tier: false,
    });
  }
  deleteTier(tier: TierSpecifications) {
    // TODO
  }
  addCategory(tier: TierSpecifications, event: MatChipInputEvent) {
    const input = event.input;
    const value = event.value;

    // Add the category
    if ((value || '').trim()) {
      tier.categories.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  removeCategory(tier: TierSpecifications, category: string){
    const index = tier.categories.indexOf(category);

    if (index >= 0) {
      tier.categories.splice(index, 1);
    }
  }

}

import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CorporaListing} from '../../../api/models/corpora-listing';
import {CampaignCreation} from '../../../api/models/campaign-creation';
import {Router} from '@angular/router';
import {TierSpecifications} from '../../../api/models/tier-specifications';

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
  addTier() {}
  deleteTier(tier: TierSpecifications) {}

}

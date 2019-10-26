import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CorporaListing} from '../../../api/models/corpora-listing';
import {CampaignCreation} from '../../../api/models/campaign-creation';
import {Router} from '@angular/router';
import {TierSpecifications} from '../../../api/models/tier-specifications';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent, MatSnackBar, MatTableDataSource} from '@angular/material';
import {animate, sequence, style, transition, trigger} from '@angular/animations';


interface CorporaSelection {
  corporaType: string;
  corporaName: string;
}

const rowsAnimation =
  trigger('rowsAnimation', [
    transition('void => *', [
      style({height: '*', opacity: '0', transform: 'translateX(-550px)', 'box-shadow': 'none'}),
      sequence([
        animate('.35s ease', style({height: '*', opacity: '.2', transform: 'translateX(0)', 'box-shadow': 'none'})),
        animate('.35s ease', style({height: '*', opacity: 1, transform: 'translateX(0)'}))
      ])
    ])
  ]);

@Component({
  selector: 'seshat-campaign-creation',
  templateUrl: './campaign-creation.component.html',
  styleUrls: ['./campaign-creation.component.scss'],
  animations: [rowsAnimation]
})
export class CampaignCreationComponent implements OnInit {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  chosenCorpora: CorporaSelection;
  campaignCreation: CampaignCreation;
  availableCorpora: CorporaListing;
  tiersTableDataSource: MatTableDataSource<TierSpecifications> = new MatTableDataSource<TierSpecifications>();
  displayedColumns: string[] = ['delete_tier', 'tier_name', 'tier_required', 'tier_validated', 'allow_empty', 'content_type', 'checking_params'];

  constructor(
    private campaignsAPI: CampaignsService,
    private router: Router) {
    this.campaignCreation = {
      name: '',
      enable_audio_dl: false,
      check_textgrids: false,
      checking_scheme: []
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
      (data) => {
        this.router.navigate(['/admin', 'campaign', data.slug]);
        // TODO : display a toast here maybe?
      }
    );
  }

  toggleTiersTable() {
    if (this.campaignCreation.check_textgrids) {
      this.tiersTableDataSource = new MatTableDataSource<TierSpecifications>(this.campaignCreation.checking_scheme);
    } else {
      this.tiersTableDataSource = new MatTableDataSource<TierSpecifications>();
    }
  }

  addTier() {
    this.tiersTableDataSource.data.push({
      name: '',
      required: true,
      validate_tier: false,
      allow_empty: true,
      categories: [],
    });
    // somehow this tells the table to update
    this.tiersTableDataSource.filter = '';
  }

  deleteTier(tier: TierSpecifications) {
    const index = this.tiersTableDataSource.data.indexOf(tier);

    if (index >= 0) {
      this.tiersTableDataSource.data.splice(index, 1);
    }
    this.tiersTableDataSource.filter = '';
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

  removeCategory(tier: TierSpecifications, category: string) {
    const index = tier.categories.indexOf(category);

    if (index >= 0) {
      tier.categories.splice(index, 1);
    }
  }

}

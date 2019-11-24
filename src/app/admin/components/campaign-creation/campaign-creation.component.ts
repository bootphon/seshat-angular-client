import {Component, OnInit} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';
import {CampaignCreation} from '../../../api/models/campaign-creation';
import {Router} from '@angular/router';
import {TierSpecifications} from '../../../api/models/tier-specifications';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {animate, sequence, style, transition, trigger} from '@angular/animations';
import {SeshatEventsService} from '../../../commons/seshat-events.service';
import {CorporaService} from '../../../api/services/corpora.service';
import {CorpusShortSummary} from '../../../api/models/corpus-short-summary';


import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'corpusType',
  pure: false
})
export class CorpusTypePipe implements PipeTransform {
  transform(items: CorpusShortSummary[], type: string): any {
    return items.filter(item => item.type === type);
  }
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
  campaignCreation: CampaignCreation;
  availableCorpora: Array<CorpusShortSummary>;

  constructor(
    private campaignsService: CampaignsService,
    private coporaService: CorporaService,
    private router: Router,
    private eventsService: SeshatEventsService,
  ) {
    this.campaignCreation = {
      name: '',
      enable_audio_dl: false,
      check_textgrids: false,
      checking_scheme: [],
      description: '',
      corpus: undefined,
    };
  }

  ngOnInit() {
    // retrieving available corpora
    this.coporaService.corporaListAllGet().subscribe((data) => this.availableCorpora = data);
    this.addTier(); // setting a default empty tier
  }

  createCampaign() {
    this.campaignsService.campaignsAdminPost({body: this.campaignCreation}).subscribe(
      (data) => {
        this.router.navigate(['/admin', 'campaign', data.slug]);
        this.eventsService.campaignsChange.emit();
      }
    );
  }

  duplicateTier(tierSpec: TierSpecifications) {
    const tierCopy = Object.assign({}, tierSpec);
    const index = this.campaignCreation.checking_scheme.indexOf(tierSpec);
    this.campaignCreation.checking_scheme.splice(index, 0, tierCopy);
  }

  addTier() {
    this.campaignCreation.checking_scheme.push({
      name: '',
      required: true,
      allow_empty: true,
      categories: [],
    });
  }

  deleteTier(tier: TierSpecifications) {
    const index = this.campaignCreation.checking_scheme.indexOf(tier);

    if (index >= 0) {
      this.campaignCreation.checking_scheme.splice(index, 1);
    }
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

import {Component, Input, OnInit} from '@angular/core';
import {CampaignStats} from '../../../api/models/campaign-stats';

@Component({
  selector: 'seshat-campaign-progress',
  templateUrl: './campaign-progress.component.html',
  styleUrls: ['./campaign-progress.component.scss']
})
export class CampaignProgressComponent implements OnInit {
  @Input() campaignStats: CampaignStats;
  constructor() { }

  ngOnInit() {
  }

}

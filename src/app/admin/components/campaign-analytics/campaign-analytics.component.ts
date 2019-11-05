import {Component, OnInit} from '@angular/core';
import {AnalyticsService} from '../../../api/services/analytics.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'seshat-campaign-analytics',
  templateUrl: './campaign-analytics.component.html',
  styleUrls: ['./campaign-analytics.component.scss']
})
export class CampaignAnalyticsComponent implements OnInit {
  constructor(
    private analyticsService: AnalyticsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const campaignSlug = this.route.snapshot.paramMap.get('campaign_slug');
  }

}

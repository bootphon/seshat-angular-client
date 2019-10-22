import { Component, OnInit } from '@angular/core';
import {AnalyticsService} from '../../../api/services/analytics.service';

@Component({
  selector: 'seshat-campaign-analytics',
  templateUrl: './campaign-analytics.component.html',
  styleUrls: ['./campaign-analytics.component.scss']
})
export class CampaignAnalyticsComponent implements OnInit {
  constructor(private analyticsService : AnalyticsService) { }

  ngOnInit() {
    // TODO : retrieve task_id from URL
  }

}

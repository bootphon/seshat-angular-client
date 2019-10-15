import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'seshat-campaign-view',
  templateUrl: './campaign-view.component.html',
  styleUrls: ['./campaign-view.component.scss']
})
export class CampaignViewComponent implements OnInit {
  @Input() campaignSlug?: string;
  constructor() { }

  ngOnInit() {
    // TODO : if the input isn't defined, fetch it in the url path
  }

}

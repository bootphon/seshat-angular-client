import { Component, OnInit, Input} from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';

@Component({
  selector: 'seshat-campaign-wiki-edit',
  templateUrl: './campaign-wiki-edit.component.html',
  styleUrls: ['./campaign-wiki-edit.component.scss']
})
export class CampaignWikiEditComponent implements OnInit {
  wikiContent: string;
  constructor(private campaignsAPI: CampaignsService) { }

  ngOnInit() {
    // TODO retrieve campaign slug in the path args
  }
  saveWiki() {}
  renderMarkdown() {}

}

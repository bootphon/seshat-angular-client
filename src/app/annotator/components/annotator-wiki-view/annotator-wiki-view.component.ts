import { Component, OnInit } from '@angular/core';
import {CampaignsService} from '../../../api/services/campaigns.service';

@Component({
  selector: 'seshat-annotator-wiki-view',
  templateUrl: './annotator-wiki-view.component.html',
  styleUrls: ['./annotator-wiki-view.component.scss']
})
export class AnnotatorWikiViewComponent implements OnInit {
  wikiMarkdown: string;
  constructor(private campaignsAPI: CampaignsService) { }

  ngOnInit() {
    // TODO : retrieve campaign slug from url args
  }
  renderMarkdown(){}

}

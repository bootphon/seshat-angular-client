import {Component, Input, OnInit} from '@angular/core';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';
import {AnnotatorsService} from '../../../api/services/annotators.service';

@Component({
  selector: 'seshat-annotator-edition',
  templateUrl: './annotator-edition.component.html',
  styleUrls: ['./annotator-edition.component.scss']
})
export class AnnotatorEditionComponent implements OnInit {
  @Input() username: string;
  annotatorProfile: AnnotatorCreation;
  constructor(private annotatorsService: AnnotatorsService) { }

  ngOnInit() {
    // TODO: load user profile from API to fill in values
  }
  updateAnnotatorProfile() {}

}

import {Component, Input, OnInit} from '@angular/core';
import {AnnotatorFullProfile} from '../../../api/models/annotator-full-profile';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';

@Component({
  selector: 'seshat-annotators-view',
  templateUrl: './annotators-view.component.html',
  styleUrls: ['./annotators-view.component.scss']
})
export class AnnotatorsViewComponent implements OnInit {
  @Input() username?: string;
  annotatorFullProfile: AnnotatorFullProfile;
  annotatorProfileEdit: AnnotatorCreation;
  constructor(private annotatorsService: AnnotatorsService) { }

  ngOnInit() {
    // TODO: if user isn't set in the input, retrieve from url args
  }
  deleteAnnotator() {}
  lockAnnotator() {}
  unlockAnnotator() {}
  updateAnnotatorProfile() {}

}

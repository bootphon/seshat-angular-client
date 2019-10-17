import {Component, OnInit} from '@angular/core';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';
import {AnnotatorsService} from '../../../api/services/annotators.service';

@Component({
  selector: 'seshat-annotator-creation',
  templateUrl: './annotator-creation.component.html',
  styleUrls: ['./annotator-creation.component.scss']
})
export class AnnotatorCreationComponent implements OnInit {
  annotatorProfile: AnnotatorCreation;
  constructor(private usersAPI: AnnotatorsService) { }

  ngOnInit() {
  }
  createAnnotator() {}

}

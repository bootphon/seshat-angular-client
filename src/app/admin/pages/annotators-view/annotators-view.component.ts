import {Component, Input, OnInit} from '@angular/core';
import {AnnotatorFullProfile} from '../../../api/models/annotator-full-profile';
import {UsersService} from '../../../api/services/users.service';

@Component({
  selector: 'seshat-annotators-view',
  templateUrl: './annotators-view.component.html',
  styleUrls: ['./annotators-view.component.scss']
})
export class AnnotatorsViewComponent implements OnInit {
  @Input() username?: string;
  annotatorFullProfile: AnnotatorFullProfile;
  constructor(private usersAPI: UsersService) { }

  ngOnInit() {
    // TODO: if user isn't set in the input, retrieve from url args
  }
  deleteAnnotator() {}
  lockAnnotator() {}
  unlockAnnotator() {}

}

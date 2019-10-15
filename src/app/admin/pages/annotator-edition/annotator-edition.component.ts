import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../../api/services/users.service';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';

@Component({
  selector: 'seshat-annotator-edition',
  templateUrl: './annotator-edition.component.html',
  styleUrls: ['./annotator-edition.component.scss']
})
export class AnnotatorEditionComponent implements OnInit {
  @Input() username: string;
  annotatorProfile: AnnotatorCreation;
  constructor(private usersAPI: UsersService) { }

  ngOnInit() {
    // TODO: load user profile from API to fill in values
  }
  updateAnnotatorProfile() {}

}

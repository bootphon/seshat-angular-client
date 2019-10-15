import { Component, OnInit } from '@angular/core';
import {AnnotatorCreation} from '../../../api/models/annotator-creation';
import {UsersService} from '../../../api/services/users.service';

@Component({
  selector: 'seshat-annotator-creation',
  templateUrl: './annotator-creation.component.html',
  styleUrls: ['./annotator-creation.component.scss']
})
export class AnnotatorCreationComponent implements OnInit {
  annotatorProfile: AnnotatorCreation;
  constructor(private usersAPI: UsersService) { }

  ngOnInit() {
  }
  createAnnotator() {}

}

import { Component, OnInit } from '@angular/core';
import {AnnotatorShortProfile} from '../../../api/models/annotator-short-profile';
import {UsersService} from '../../../api/services/users.service';

@Component({
  selector: 'seshat-annotators-list',
  templateUrl: './annotators-list.component.html',
  styleUrls: ['./annotators-list.component.scss']
})
export class AnnotatorsListComponent implements OnInit {
  annotatorsList: Array<AnnotatorShortProfile>;
  constructor(private usersAPI: UsersService) { }

  ngOnInit() {
  }

  openAnnotatorPage(username: string) {}

}

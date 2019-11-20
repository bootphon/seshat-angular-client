import {Component, Input, OnInit} from '@angular/core';
import {UserShortProfile} from '../../../api/models/user-short-profile';

type UserProfileFields = keyof UserShortProfile;

@Component({
  selector: 'seshat-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  @Input() userList: UserShortProfile[];
  @Input() usernamesList: string[];
  @Input() setLink = false;
  @Input() field: UserProfileFields = 'username';
  constructor() { }

  ngOnInit() {
  }

  prop<T, K extends keyof UserShortProfile>(user: UserShortProfile, key: UserProfileFields) {
    return user[key];
  }

}

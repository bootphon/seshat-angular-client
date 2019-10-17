import { Component, OnInit } from '@angular/core';
import {RoleProvider} from '../../commons/role-provider';

@Component({
  selector: 'seshat-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  constructor(private roleProvider: RoleProvider) { }

  ngOnInit() {
  }
  login(){}

}

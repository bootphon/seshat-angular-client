import { Component, OnInit } from '@angular/core';
import {RoleProvider} from '../../commons/role-provider';
import {Router} from '@angular/router';
import {AccountsService} from '../../api/services/accounts.service';
import {ConnectionToken} from '../../api/models/connection-token';

@Component({
  selector: 'seshat-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private roleProvider: RoleProvider,
    private router: Router,
    private acc: AccountsService
    ) { }

  ngOnInit() {
  }
  login() {
    console.log(`u:${this.username}, ${this.password}`);
    this.roleProvider.login(this.username, this.password).then(
      (tokenData: ConnectionToken) => {
        this.roleProvider.setToken(tokenData);
        console.log(tokenData.token);
        // TODO : add login errors handling here
        this.router.navigate([''])
      }
    );

  }

}

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { LoginPageComponent } from './login/login-page/login-page.component';

@Component({
  selector: 'seshat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seshat-angular-client';
  isLogged = true;

  constructor(
    private dialog: MatDialog,
  ) {}
}

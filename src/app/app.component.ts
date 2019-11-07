import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSidenav} from '@angular/material';
import {LoginPageComponent} from './login/login-page/login-page.component';
import {RoleProvider} from './commons/role-provider';
import {SeshatEventsService} from './commons/seshat-events.service';

@Component({
  selector: 'seshat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;
  title = 'seshat-angular-client';

  constructor(
    private dialog: MatDialog,
    private eventsService: SeshatEventsService
  ) {
  }

  ngOnInit(): void {
    this.eventsService.logInEvent.subscribe((param) => this.toggleSideNav(param));
  }

  private toggleSideNav(param: any) {
    if (param) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

}

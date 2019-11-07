import {Component, OnInit} from '@angular/core';
import {RoleProvider} from '../../commons/role-provider';
import {Router} from '@angular/router';
import {ConnectionToken} from '../../api/models/connection-token';
import {AppComponent} from '../../app.component';
import {SeshatEventsService} from '../../commons/seshat-events.service';

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
    private eventsService: SeshatEventsService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.eventsService.logInEvent.emit(false);
  }

  login() {
    console.log(`u:${this.username}, ${this.password}`);
    this.roleProvider.login(this.username, this.password).then(
      (tokenData: ConnectionToken) => {
        this.roleProvider.setToken(tokenData);
        if (this.roleProvider.isAdmin()) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/annotator']);
        }

      }
    );
  }
}

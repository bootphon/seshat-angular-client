import {EventEmitter, Injectable} from '@angular/core';
import {AccountsService} from '../api/services/accounts.service';
import {ConnectionToken} from '../api/models/connection-token';
import {UserShortProfile} from '../api/models/user-short-profile';
import {SeshatEventsService} from './seshat-events.service';


@Injectable({providedIn: 'root'})
export class RoleProvider {
  private userData: UserShortProfile;
  private userToken: string;

  constructor(
    private accountsService: AccountsService,
    private eventsService: SeshatEventsService,
  ) {
  }

  public getToken(): string {
    return window.localStorage.getItem('token');
  }

  public isLogged() {
    this.userToken = window.localStorage.getItem('token');
    return this.userToken != undefined;
  }

  public async getUserData() {
    if (this.userData) {
      return this.userData;
    } else {
      this.userData = await this.accountsService.accountsDataGet().toPromise();
      window.localStorage.setItem('userData', JSON.stringify(this.userData));
      return this.userData;
    }
  }

  private loadUserData() {
    if (!this.userData) {
      this.userData = JSON.parse(window.localStorage.getItem('userData')) as UserShortProfile;
    }
  }

  public getUserShortProfile() {
    this.loadUserData();
    return this.userData;
  }

  public getUserName() {
    this.loadUserData();
    return this.userData.username;
  }

  public isAdmin() {
    this.loadUserData();
    return this.userData != undefined && this.userData.type === 'admin';
  }

  public isAnnotator() {
    this.loadUserData();
    return this.userData != undefined && this.userData.type === 'annotator';
  }

  public async login(username: string, password: string): Promise<ConnectionToken> {
    return await this.accountsService.accountsLoginPost({body: {login: username, password}}).toPromise();
  }

  public setToken(t) {
    window.localStorage.setItem('token', t.token);
    this.eventsService.logInEvent.emit(true);
  }

  public logout() {
    window.localStorage.clear();
    this.eventsService.logInEvent.emit(false);
  }
}

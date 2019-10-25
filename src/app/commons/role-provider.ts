import {EventEmitter, Injectable} from '@angular/core';
import {AccountsService} from '../api/services/accounts.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ConnectionToken} from '../api/models/connection-token';

enum UserType {
  Admin = 'admin',
  Annotator = 'annotator',
}


export interface UserData {
  username: string;
  first_name: string;
  last_name: string;
  type: UserType;
}

@Injectable({providedIn: 'root'})
export class RoleProvider {
  private userData: UserData;
  private userToken: string;
  public logInEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private accountsService: AccountsService,
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
      const t = await this.accountsService.accountsDataGet().toPromise();
      this.userData = {
        first_name: t.first_name,
        last_name: t.last_name,
        type: t.type === 'admin' ? UserType.Admin : UserType.Annotator,
        username: t.username
      };
      window.localStorage.setItem('userData', JSON.stringify(this.userData));
      return this.userData;
    }
  }

  private loadUserData() {
    if (!this.userData) {
      this.userData = JSON.parse(window.localStorage.getItem('userData')) as UserData;
    }
  }

  public isAdmin() {
    this.loadUserData();
    return this.userData != undefined && this.userData.type === UserType.Admin;
  }

  public isAnnotator() {
    this.loadUserData();
    return this.userData != undefined && this.userData.type === UserType.Annotator;
  }

  public async login(username: string, password: string): Promise<ConnectionToken> {
    return await this.accountsService.accountsLoginPost({body: {login: username, password}}).toPromise();
  }

  public setToken(t) {
    window.localStorage.setItem('token', t.token);
    this.logInEvent.emit(true);
  }

  public clear() {
    window.localStorage.clear();
    this.logInEvent.emit(false);
  }
}

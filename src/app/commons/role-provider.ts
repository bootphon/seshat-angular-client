import {Injectable} from '@angular/core';
import {AccountsService} from '../api/services/accounts.service';

enum UserType {
  Admin = 'admin',
  Annotator = 'annotator',
}


export interface UserData  {
  token: string;
  username: string;
  first_name: string;
  last_name: string;
  type: UserType;
}

@Injectable({providedIn : 'root'})
export class RoleProvider {
  private userData: UserData;

  constructor(private accountsService: AccountsService) {}

  public getToken() {
    return this.userData.token;
  }
  public getUserData(): UserData {
    // TODO : much more logic is needed here
    return this.userData;
  }
  public isAdmin(){
    return this.userData.type === UserType.Admin;
  }
  public isAnnotator(){
    return this.userData.type === UserType.Admin;
  }
  public login(username: string, password: string) {}
}

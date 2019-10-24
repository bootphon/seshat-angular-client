import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {RoleProvider} from './role-provider';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate{
  constructor(private roleProvider: RoleProvider, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.roleProvider.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    }
    if (this.roleProvider.isAnnotator()) {
      this.router.navigate(['/annotator/tasks']);
      return true;
    } else {
      this.router.navigate(['/admin/campaign/list']);
      return true;
    }
  }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {RoleProvider} from './role-provider';


@Injectable({
  providedIn: 'root',
})
export class AuthGard implements CanActivate {
  constructor(
    private router: Router,
    private roleProvider: RoleProvider,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.roleProvider.isLogged()) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}


@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private roleProvider: RoleProvider,
  ) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.roleProvider.isAdmin();
  }
}


@Injectable({
  providedIn: 'root',
})
export class AnnotatorGuard implements CanActivate {
  constructor(
    private router: Router,
    private roleProvider: RoleProvider,
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.roleProvider.isAnnotator();
  }
}

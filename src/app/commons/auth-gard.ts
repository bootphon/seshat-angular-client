
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {RoleProvider} from './role-provider';
import {GenericSeshatError} from './errors';



@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private roleProvider: RoleProvider,
  ) {}

  private checkAllowance(route: string): boolean {
    switch (route) {
      case '/admin':
        return this.roleProvider.isAdmin();
      case '/annotator':
        return this.roleProvider.isAnnotator();
      default:
        return false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      if (this.checkAllowance(state.url)) {
        return true;
      } else {
        console.info(`Navigation to ${state.url} failed!`);
        throw new GenericSeshatError('Access Denied', 'RejectedRouting');
      }
    } catch (e) {
      if (e instanceof GenericSeshatError) {
        const error: GenericSeshatError = e;
        switch (error.getType()) {
          case 'NoUserFound' || 'SessionExpired':
            // User is not logged in redirecting to login page
            this.router.navigate(
              ['/login'],
              {
                queryParams: {
                  returnUrl: state.url,
                  rejected: true,
                  message: `You need to login in order to access this page.`,
                },
              },
            ).catch((_) => { console.error('Failed to navigate to route!!!'); });
            return false;
          case 'RejectedRouting':
            // Page Access Denied redirecting to home (with message)
            this.router.navigate(
              [''],
              {
                queryParams: {
                  returnUrl: state.url,
                  rejected: true,
                  message: `User is not allowed to access ${state.url}`,
                },
              },
            ).catch((_) => { console.error('Failed to navigate to route!!!'); });
            return false;

          default:
            console.error(error);
        }
      } else {
        // Not my error
        throw e;
      }
    }
  }
}

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {RoleProvider} from './role-provider';
import {MatSnackBar} from '@angular/material';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(
    private roleProvider: RoleProvider,
    private snackBar: MatSnackBar
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    const token = this.roleProvider.getToken();
    req = req.clone({
      setHeaders: {
        'Auth-token': `${token}`
      }
    });

    // Also handle errors globally
    // TODO : intercept requests that are not application/json and download them right away
    return next.handle(req);
  }
}

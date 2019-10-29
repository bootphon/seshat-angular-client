import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {RoleProvider} from './role-provider';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private roleProvider: RoleProvider) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Apply the headers
    const token = this.roleProvider.getToken();
    req = req.clone({
      setHeaders: {
        'Auth-token': `${token}`
      }
    });

    // Also handle errors globally
    return next.handle(req);
  }
}

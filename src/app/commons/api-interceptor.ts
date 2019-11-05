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
    // Also handle errors globally
    return next.handle(req).pipe(
      tap(x => x, err => {
        // Handle this err
        let errorMsg = 'The server returned an error for this action';
        switch (err.status) {
          case 404: {
            errorMsg = `Some entity cannot be found by the server`;
            break;
          }
          case 422: {
            // TODO : process more in detail the error fields
            errorMsg = `Some request field are missing or invalid`;
            break;
          }
          case 403: {
            const errorData = err.error instanceof String ? JSON.parse(err.error): err.error;
            errorMsg = `Some request field are invalid : ${errorData.message}`;
            break;
          }
          case 401: {
            errorMsg = `You are not authorized: ${err.error.message}`;
            break;
          }
          case 500: {
            errorMsg = `Something wrong happened on the server...`;
            break;
          }
        }
        this.snackBar.open(errorMsg,
          'Error',
          {verticalPosition: 'top', duration: 15 * 1000});
      })
    );
  }
}

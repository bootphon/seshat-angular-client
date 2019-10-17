/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { LoginCredentials } from '../models/login-credentials';
import { NotificationData } from '../models/notification-data';
import { NotificationDelete } from '../models/notification-delete';
import { UserShortProfile } from '../models/user-short-profile';


/**
 * Login/logout operations
 */
@Injectable({
  providedIn: 'root',
})
export class AccountsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation accountsLoginPost
   */
  static readonly AccountsLoginPostPath = '/accounts/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsLoginPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  accountsLoginPost$Response(params: {

    body: LoginCredentials
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.AccountsLoginPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountsLoginPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  accountsLoginPost(params: {

    body: LoginCredentials
  }): Observable<void> {

    return this.accountsLoginPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountsDataGet
   */
  static readonly AccountsDataGetPath = '/accounts/data';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsDataGet()` instead.
   *
   * This method doesn't expect any response body
   */
  accountsDataGet$Response(params?: {

  }): Observable<StrictHttpResponse<UserShortProfile>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.AccountsDataGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserShortProfile>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountsDataGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  accountsDataGet(params?: {

  }): Observable<UserShortProfile> {

    return this.accountsDataGet$Response(params).pipe(
      map((r: StrictHttpResponse<UserShortProfile>) => r.body as UserShortProfile)
    );
  }

  /**
   * Path part for operation accountsLogoutPost
   */
  static readonly AccountsLogoutPostPath = '/accounts/logout';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsLogoutPost()` instead.
   *
   * This method doesn't expect any response body
   */
  accountsLogoutPost$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.AccountsLogoutPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountsLogoutPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  accountsLogoutPost(params?: {

  }): Observable<void> {

    return this.accountsLogoutPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation accountsNotificationsGet
   */
  static readonly AccountsNotificationsGetPath = '/accounts/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsNotificationsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  accountsNotificationsGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<NotificationData>>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.AccountsNotificationsGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<NotificationData>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountsNotificationsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  accountsNotificationsGet(params?: {

  }): Observable<Array<NotificationData>> {

    return this.accountsNotificationsGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<NotificationData>>) => r.body as Array<NotificationData>)
    );
  }

  /**
   * Path part for operation accountsNotificationsDelete
   */
  static readonly AccountsNotificationsDeletePath = '/accounts/notifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `accountsNotificationsDelete()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  accountsNotificationsDelete$Response(params: {

    body: NotificationDelete
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AccountsService.AccountsNotificationsDeletePath, 'delete');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `accountsNotificationsDelete$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  accountsNotificationsDelete(params: {

    body: NotificationDelete
  }): Observable<void> {

    return this.accountsNotificationsDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

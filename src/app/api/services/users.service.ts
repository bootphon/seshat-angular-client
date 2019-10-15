/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AnnotatorCreation } from '../models/annotator-creation';
import { AnnotatorDeletion } from '../models/annotator-deletion';
import { AnnotatorFullProfile } from '../models/annotator-full-profile';
import { AnnotatorLockRequest } from '../models/annotator-lock-request';
import { AnnotatorShortProfile } from '../models/annotator-short-profile';


/**
 * Users administration and creation
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation usersManagePut
   */
  static readonly UsersManagePutPath = '/users/manage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersManagePut()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersManagePut$Response(params: {

    body: AnnotatorCreation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersManagePutPath, 'put');
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
   * To access the full response (for headers, for example), `usersManagePut$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersManagePut(params: {

    body: AnnotatorCreation
  }): Observable<void> {

    return this.usersManagePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation usersManagePost
   */
  static readonly UsersManagePostPath = '/users/manage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersManagePost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersManagePost$Response(params: {

    body: AnnotatorCreation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersManagePostPath, 'post');
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
   * To access the full response (for headers, for example), `usersManagePost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersManagePost(params: {

    body: AnnotatorCreation
  }): Observable<void> {

    return this.usersManagePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation usersManageDelete
   */
  static readonly UsersManageDeletePath = '/users/manage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersManageDelete()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersManageDelete$Response(params: {

    body: AnnotatorDeletion
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersManageDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `usersManageDelete$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersManageDelete(params: {

    body: AnnotatorDeletion
  }): Observable<void> {

    return this.usersManageDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation usersViewUsernameGet
   */
  static readonly UsersViewUsernameGetPath = '/users/view/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersViewUsernameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  usersViewUsernameGet$Response(params: {
    username: string;

  }): Observable<StrictHttpResponse<AnnotatorFullProfile>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersViewUsernameGetPath, 'get');
    if (params) {

      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AnnotatorFullProfile>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersViewUsernameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  usersViewUsernameGet(params: {
    username: string;

  }): Observable<AnnotatorFullProfile> {

    return this.usersViewUsernameGet$Response(params).pipe(
      map((r: StrictHttpResponse<AnnotatorFullProfile>) => r.body as AnnotatorFullProfile)
    );
  }

  /**
   * Path part for operation usersLockPost
   */
  static readonly UsersLockPostPath = '/users/lock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersLockPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersLockPost$Response(params: {

    body: AnnotatorLockRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersLockPostPath, 'post');
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
   * To access the full response (for headers, for example), `usersLockPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  usersLockPost(params: {

    body: AnnotatorLockRequest
  }): Observable<void> {

    return this.usersLockPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation usersListGet
   */
  static readonly UsersListGetPath = '/users/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  usersListGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<AnnotatorShortProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UsersListGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AnnotatorShortProfile>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `usersListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  usersListGet(params?: {

  }): Observable<Array<AnnotatorShortProfile>> {

    return this.usersListGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AnnotatorShortProfile>>) => r.body as Array<AnnotatorShortProfile>)
    );
  }

}

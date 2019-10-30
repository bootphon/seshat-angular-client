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
import { AnnotatorEdition } from '../models/annotator-edition';
import { AnnotatorLockRequest } from '../models/annotator-lock-request';
import { AnnotatorPasswordChange } from '../models/annotator-password-change';
import { AnnotatorProfile } from '../models/annotator-profile';
import { TaskShortStatus } from '../models/task-short-status';


/**
 * Annotators administration and creation
 */
@Injectable({
  providedIn: 'root',
})
export class AnnotatorsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation annotatorsManagePut
   */
  static readonly AnnotatorsManagePutPath = '/annotators/manage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsManagePut()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsManagePut$Response(params: {

    body: AnnotatorEdition
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsManagePutPath, 'put');
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
   * To access the full response (for headers, for example), `annotatorsManagePut$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsManagePut(params: {

    body: AnnotatorEdition
  }): Observable<void> {

    return this.annotatorsManagePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation annotatorsManagePost
   */
  static readonly AnnotatorsManagePostPath = '/annotators/manage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsManagePost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsManagePost$Response(params: {

    body: AnnotatorCreation
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsManagePostPath, 'post');
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
   * To access the full response (for headers, for example), `annotatorsManagePost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsManagePost(params: {

    body: AnnotatorCreation
  }): Observable<void> {

    return this.annotatorsManagePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation annotatorsManageDelete
   */
  static readonly AnnotatorsManageDeletePath = '/annotators/manage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsManageDelete()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsManageDelete$Response(params: {

    body: AnnotatorDeletion
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsManageDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `annotatorsManageDelete$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsManageDelete(params: {

    body: AnnotatorDeletion
  }): Observable<void> {

    return this.annotatorsManageDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation annotatorsPasswordChangePost
   */
  static readonly AnnotatorsPasswordChangePostPath = '/annotators/password/change';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsPasswordChangePost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsPasswordChangePost$Response(params: {

    body: AnnotatorPasswordChange
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsPasswordChangePostPath, 'post');
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
   * To access the full response (for headers, for example), `annotatorsPasswordChangePost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsPasswordChangePost(params: {

    body: AnnotatorPasswordChange
  }): Observable<void> {

    return this.annotatorsPasswordChangePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation annotatorsViewUsernameGet
   */
  static readonly AnnotatorsViewUsernameGetPath = '/annotators/view/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsViewUsernameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  annotatorsViewUsernameGet$Response(params: {
    username: string;

  }): Observable<StrictHttpResponse<AnnotatorProfile>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsViewUsernameGetPath, 'get');
    if (params) {

      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AnnotatorProfile>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `annotatorsViewUsernameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  annotatorsViewUsernameGet(params: {
    username: string;

  }): Observable<AnnotatorProfile> {

    return this.annotatorsViewUsernameGet$Response(params).pipe(
      map((r: StrictHttpResponse<AnnotatorProfile>) => r.body as AnnotatorProfile)
    );
  }

  /**
   * Path part for operation annotatorsListTasksUsernameGet
   */
  static readonly AnnotatorsListTasksUsernameGetPath = '/annotators/list/tasks/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsListTasksUsernameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  annotatorsListTasksUsernameGet$Response(params: {
    username: string;

  }): Observable<StrictHttpResponse<Array<TaskShortStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsListTasksUsernameGetPath, 'get');
    if (params) {

      rb.path('username', params.username);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TaskShortStatus>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `annotatorsListTasksUsernameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  annotatorsListTasksUsernameGet(params: {
    username: string;

  }): Observable<Array<TaskShortStatus>> {

    return this.annotatorsListTasksUsernameGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TaskShortStatus>>) => r.body as Array<TaskShortStatus>)
    );
  }

  /**
   * Path part for operation annotatorsLockPost
   */
  static readonly AnnotatorsLockPostPath = '/annotators/lock';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsLockPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsLockPost$Response(params: {

    body: AnnotatorLockRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsLockPostPath, 'post');
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
   * To access the full response (for headers, for example), `annotatorsLockPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  annotatorsLockPost(params: {

    body: AnnotatorLockRequest
  }): Observable<void> {

    return this.annotatorsLockPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation annotatorsListGet
   */
  static readonly AnnotatorsListGetPath = '/annotators/list';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `annotatorsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  annotatorsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<AnnotatorProfile>>> {

    const rb = new RequestBuilder(this.rootUrl, AnnotatorsService.AnnotatorsListGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AnnotatorProfile>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `annotatorsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  annotatorsListGet(params?: {

  }): Observable<Array<AnnotatorProfile>> {

    return this.annotatorsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AnnotatorProfile>>) => r.body as Array<AnnotatorProfile>)
    );
  }

}

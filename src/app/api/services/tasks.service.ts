/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { TaskComment } from '../models/task-comment';
import { TaskCommentSubmission } from '../models/task-comment-submission';
import { TaskFullStatusAdmin } from '../models/task-full-status-admin';
import { TaskFullStatusAnnotator } from '../models/task-full-status-annotator';
import { TaskLockRequest } from '../models/task-lock-request';
import { TaskShortStatus } from '../models/task-short-status';
import { TaskTextgridSubmission } from '../models/task-textgrid-submission';
import { TasksAssignment } from '../models/tasks-assignment';


/**
 * Operations to manage, interact with and display tasks
 */
@Injectable({
  providedIn: 'root',
})
export class TasksService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation tasksListAssignedGet
   */
  static readonly TasksListAssignedGetPath = '/tasks/list/assigned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksListAssignedGet()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksListAssignedGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<TaskShortStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksListAssignedGetPath, 'get');
    if (params) {


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
   * To access the full response (for headers, for example), `tasksListAssignedGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksListAssignedGet(params?: {

  }): Observable<Array<TaskShortStatus>> {

    return this.tasksListAssignedGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TaskShortStatus>>) => r.body as Array<TaskShortStatus>)
    );
  }

  /**
   * Path part for operation tasksAssignPost
   */
  static readonly TasksAssignPostPath = '/tasks/assign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksAssignPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksAssignPost$Response(params: {

    body: TasksAssignment
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksAssignPostPath, 'post');
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
   * To access the full response (for headers, for example), `tasksAssignPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksAssignPost(params: {

    body: TasksAssignment
  }): Observable<void> {

    return this.tasksAssignPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tasksDeleteTaskIdDelete
   */
  static readonly TasksDeleteTaskIdDeletePath = '/tasks/delete/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksDeleteTaskIdDelete()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksDeleteTaskIdDelete$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksDeleteTaskIdDeletePath, 'delete');
    if (params) {

      rb.path('task_id', params.taskId);

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
   * To access the full response (for headers, for example), `tasksDeleteTaskIdDelete$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksDeleteTaskIdDelete(params: {
    taskId: string;

  }): Observable<void> {

    return this.tasksDeleteTaskIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tasksLockPost
   */
  static readonly TasksLockPostPath = '/tasks/lock/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksLockPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksLockPost$Response(params: {

    body: TaskLockRequest
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksLockPostPath, 'post');
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
   * To access the full response (for headers, for example), `tasksLockPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksLockPost(params: {

    body: TaskLockRequest
  }): Observable<void> {

    return this.tasksLockPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tasksStatusAdminTaskIdGet
   */
  static readonly TasksStatusAdminTaskIdGetPath = '/tasks/status/admin/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksStatusAdminTaskIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksStatusAdminTaskIdGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<TaskFullStatusAdmin>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksStatusAdminTaskIdGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TaskFullStatusAdmin>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tasksStatusAdminTaskIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksStatusAdminTaskIdGet(params: {
    taskId: string;

  }): Observable<TaskFullStatusAdmin> {

    return this.tasksStatusAdminTaskIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<TaskFullStatusAdmin>) => r.body as TaskFullStatusAdmin)
    );
  }

  /**
   * Path part for operation tasksStatusAnnotatorTaskIdGet
   */
  static readonly TasksStatusAnnotatorTaskIdGetPath = '/tasks/status/annotator/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksStatusAnnotatorTaskIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksStatusAnnotatorTaskIdGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<TaskFullStatusAnnotator>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksStatusAnnotatorTaskIdGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TaskFullStatusAnnotator>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tasksStatusAnnotatorTaskIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksStatusAnnotatorTaskIdGet(params: {
    taskId: string;

  }): Observable<TaskFullStatusAnnotator> {

    return this.tasksStatusAnnotatorTaskIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<TaskFullStatusAnnotator>) => r.body as TaskFullStatusAnnotator)
    );
  }

  /**
   * Path part for operation tasksSubmitTaskIdPost
   */
  static readonly TasksSubmitTaskIdPostPath = '/tasks/submit/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksSubmitTaskIdPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksSubmitTaskIdPost$Response(params: {
    taskId: string;

    body: TaskTextgridSubmission
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksSubmitTaskIdPostPath, 'post');
    if (params) {

      rb.path('task_id', params.taskId);

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
   * To access the full response (for headers, for example), `tasksSubmitTaskIdPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksSubmitTaskIdPost(params: {
    taskId: string;

    body: TaskTextgridSubmission
  }): Observable<void> {

    return this.tasksSubmitTaskIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tasksValidateTaskIdPost
   */
  static readonly TasksValidateTaskIdPostPath = '/tasks/validate/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksValidateTaskIdPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksValidateTaskIdPost$Response(params: {
    taskId: string;

    body: TaskTextgridSubmission
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksValidateTaskIdPostPath, 'post');
    if (params) {

      rb.path('task_id', params.taskId);

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
   * To access the full response (for headers, for example), `tasksValidateTaskIdPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksValidateTaskIdPost(params: {
    taskId: string;

    body: TaskTextgridSubmission
  }): Observable<void> {

    return this.tasksValidateTaskIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation tasksCommentTaskIdGet
   */
  static readonly TasksCommentTaskIdGetPath = '/tasks/comment/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksCommentTaskIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksCommentTaskIdGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<Array<TaskComment>>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksCommentTaskIdGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TaskComment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `tasksCommentTaskIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  tasksCommentTaskIdGet(params: {
    taskId: string;

  }): Observable<Array<TaskComment>> {

    return this.tasksCommentTaskIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TaskComment>>) => r.body as Array<TaskComment>)
    );
  }

  /**
   * Path part for operation tasksCommentTaskIdPost
   */
  static readonly TasksCommentTaskIdPostPath = '/tasks/comment/{task_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tasksCommentTaskIdPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksCommentTaskIdPost$Response(params: {
    taskId: string;

    body: TaskCommentSubmission
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TasksService.TasksCommentTaskIdPostPath, 'post');
    if (params) {

      rb.path('task_id', params.taskId);

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
   * To access the full response (for headers, for example), `tasksCommentTaskIdPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  tasksCommentTaskIdPost(params: {
    taskId: string;

    body: TaskCommentSubmission
  }): Observable<void> {

    return this.tasksCommentTaskIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

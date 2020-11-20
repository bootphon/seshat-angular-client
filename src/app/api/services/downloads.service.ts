/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DownloadsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation downloadsTaskTaskIdStarterGet
   */
  static readonly DownloadsTaskTaskIdStarterGetPath = '/downloads/task/{task_id}/starter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsTaskTaskIdStarterGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdStarterGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdStarterGetPath, 'get');
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
   * To access the full response (for headers, for example), `downloadsTaskTaskIdStarterGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdStarterGet(params: {
    taskId: string;

  }): Observable<void> {

    return this.downloadsTaskTaskIdStarterGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadsTaskTaskIdCurrentTextgridGet
   */
  static readonly DownloadsTaskTaskIdCurrentTextgridGetPath = '/downloads/task/{task_id}/current_textgrid';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsTaskTaskIdCurrentTextgridGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdCurrentTextgridGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdCurrentTextgridGetPath, 'get');
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
   * To access the full response (for headers, for example), `downloadsTaskTaskIdCurrentTextgridGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdCurrentTextgridGet(params: {
    taskId: string;

  }): Observable<void> {

    return this.downloadsTaskTaskIdCurrentTextgridGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadsTaskTaskIdConflictLogGet
   */
  static readonly DownloadsTaskTaskIdConflictLogGetPath = '/downloads/task/{task_id}/conflict_log';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsTaskTaskIdConflictLogGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdConflictLogGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdConflictLogGetPath, 'get');
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
   * To access the full response (for headers, for example), `downloadsTaskTaskIdConflictLogGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdConflictLogGet(params: {
    taskId: string;

  }): Observable<void> {

    return this.downloadsTaskTaskIdConflictLogGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadsTaskTaskIdTextgridsGet
   */
  static readonly DownloadsTaskTaskIdTextgridsGetPath = '/downloads/task/{task_id}/textgrids';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsTaskTaskIdTextgridsGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdTextgridsGet$Response(params: {
    taskId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdTextgridsGetPath, 'get');
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
   * To access the full response (for headers, for example), `downloadsTaskTaskIdTextgridsGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTaskTaskIdTextgridsGet(params: {
    taskId: string;

  }): Observable<void> {

    return this.downloadsTaskTaskIdTextgridsGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadsTextgridTextgridIdGet
   */
  static readonly DownloadsTextgridTextgridIdGetPath = '/downloads/textgrid/{textgrid_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsTextgridTextgridIdGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTextgridTextgridIdGet$Response(params: {
    textgridId: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTextgridTextgridIdGetPath, 'get');
    if (params) {

      rb.path('textgrid_id', params.textgridId);

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
   * To access the full response (for headers, for example), `downloadsTextgridTextgridIdGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsTextgridTextgridIdGet(params: {
    textgridId: string;

  }): Observable<void> {

    return this.downloadsTextgridTextgridIdGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadsCampaignArchiveCampaignSlugGet
   */
  static readonly DownloadsCampaignArchiveCampaignSlugGetPath = '/downloads/campaign/archive/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsCampaignArchiveCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsCampaignArchiveCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsCampaignArchiveCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

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
   * To access the full response (for headers, for example), `downloadsCampaignArchiveCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsCampaignArchiveCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<void> {

    return this.downloadsCampaignArchiveCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation downloadsCampaignGammaCsvCampaignSlugGet
   */
  static readonly DownloadsCampaignGammaCsvCampaignSlugGetPath = '/downloads/campaign/gamma_csv/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadsCampaignGammaCsvCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsCampaignGammaCsvCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsCampaignGammaCsvCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

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
   * To access the full response (for headers, for example), `downloadsCampaignGammaCsvCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  downloadsCampaignGammaCsvCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<void> {

    return this.downloadsCampaignGammaCsvCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

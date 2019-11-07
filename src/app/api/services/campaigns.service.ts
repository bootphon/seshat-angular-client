/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CampaignCreation } from '../models/campaign-creation';
import { CampaignEdit } from '../models/campaign-edit';
import { CampaignSlug } from '../models/campaign-slug';
import { CampaignStatus } from '../models/campaign-status';
import { CampaignSubscriptionUpdate } from '../models/campaign-subscription-update';
import { CampaignWikiPage } from '../models/campaign-wiki-page';
import { CampaignWikiPageUpdate } from '../models/campaign-wiki-page-update';
import { CorporaListing } from '../models/corpora-listing';
import { CorpusFile } from '../models/corpus-file';
import { TaskShortStatus } from '../models/task-short-status';


/**
 * Operations to display and create campaigns
 */
@Injectable({
  providedIn: 'root',
})
export class CampaignsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation campaignsAvailableCorporaGet
   */
  static readonly CampaignsAvailableCorporaGetPath = '/campaigns/available_corpora';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsAvailableCorporaGet()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsAvailableCorporaGet$Response(params?: {

  }): Observable<StrictHttpResponse<CorporaListing>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsAvailableCorporaGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorporaListing>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `campaignsAvailableCorporaGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsAvailableCorporaGet(params?: {

  }): Observable<CorporaListing> {

    return this.campaignsAvailableCorporaGet$Response(params).pipe(
      map((r: StrictHttpResponse<CorporaListing>) => r.body as CorporaListing)
    );
  }

  /**
   * Path part for operation campaignsAdminPut
   */
  static readonly CampaignsAdminPutPath = '/campaigns/admin/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsAdminPut()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsAdminPut$Response(params: {

    body: CampaignEdit
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsAdminPutPath, 'put');
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
   * To access the full response (for headers, for example), `campaignsAdminPut$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsAdminPut(params: {

    body: CampaignEdit
  }): Observable<void> {

    return this.campaignsAdminPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation campaignsAdminPost
   */
  static readonly CampaignsAdminPostPath = '/campaigns/admin/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsAdminPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsAdminPost$Response(params: {

    body: CampaignCreation
  }): Observable<StrictHttpResponse<CampaignSlug>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsAdminPostPath, 'post');
    if (params) {


      rb.body(params.body, 'application/json');
    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CampaignSlug>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `campaignsAdminPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsAdminPost(params: {

    body: CampaignCreation
  }): Observable<CampaignSlug> {

    return this.campaignsAdminPost$Response(params).pipe(
      map((r: StrictHttpResponse<CampaignSlug>) => r.body as CampaignSlug)
    );
  }

  /**
   * Path part for operation campaignsAdminDelete
   */
  static readonly CampaignsAdminDeletePath = '/campaigns/admin/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsAdminDelete()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsAdminDelete$Response(params: {

    body: CampaignSlug
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsAdminDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `campaignsAdminDelete$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsAdminDelete(params: {

    body: CampaignSlug
  }): Observable<void> {

    return this.campaignsAdminDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation campaignsListGet
   */
  static readonly CampaignsListGetPath = '/campaigns/list/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsListGet()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsListGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CampaignStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsListGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CampaignStatus>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `campaignsListGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsListGet(params?: {

  }): Observable<Array<CampaignStatus>> {

    return this.campaignsListGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CampaignStatus>>) => r.body as Array<CampaignStatus>)
    );
  }

  /**
   * Path part for operation campaignsViewCampaignSlugGet
   */
  static readonly CampaignsViewCampaignSlugGetPath = '/campaigns/view/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsViewCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsViewCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<CampaignStatus>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsViewCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CampaignStatus>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `campaignsViewCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsViewCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<CampaignStatus> {

    return this.campaignsViewCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<CampaignStatus>) => r.body as CampaignStatus)
    );
  }

  /**
   * Path part for operation campaignsListTasksCampaignSlugGet
   */
  static readonly CampaignsListTasksCampaignSlugGetPath = '/campaigns/list/tasks/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsListTasksCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsListTasksCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<Array<TaskShortStatus>>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsListTasksCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

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
   * To access the full response (for headers, for example), `campaignsListTasksCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsListTasksCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<Array<TaskShortStatus>> {

    return this.campaignsListTasksCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TaskShortStatus>>) => r.body as Array<TaskShortStatus>)
    );
  }

  /**
   * Path part for operation campaignsFilesListCampaignSlugGet
   */
  static readonly CampaignsFilesListCampaignSlugGetPath = '/campaigns/files/list/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsFilesListCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsFilesListCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<Array<CorpusFile>>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsFilesListCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CorpusFile>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `campaignsFilesListCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsFilesListCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<Array<CorpusFile>> {

    return this.campaignsFilesListCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CorpusFile>>) => r.body as Array<CorpusFile>)
    );
  }

  /**
   * Path part for operation campaignsWikiUpdateCampaignSlugPost
   */
  static readonly CampaignsWikiUpdateCampaignSlugPostPath = '/campaigns/wiki/update/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsWikiUpdateCampaignSlugPost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsWikiUpdateCampaignSlugPost$Response(params: {
    campaignSlug: string;

    body: CampaignWikiPageUpdate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsWikiUpdateCampaignSlugPostPath, 'post');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

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
   * To access the full response (for headers, for example), `campaignsWikiUpdateCampaignSlugPost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsWikiUpdateCampaignSlugPost(params: {
    campaignSlug: string;

    body: CampaignWikiPageUpdate
  }): Observable<void> {

    return this.campaignsWikiUpdateCampaignSlugPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation campaignsWikiViewCampaignSlugGet
   */
  static readonly CampaignsWikiViewCampaignSlugGetPath = '/campaigns/wiki/view/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsWikiViewCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsWikiViewCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<CampaignWikiPage>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsWikiViewCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CampaignWikiPage>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `campaignsWikiViewCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  campaignsWikiViewCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<CampaignWikiPage> {

    return this.campaignsWikiViewCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<CampaignWikiPage>) => r.body as CampaignWikiPage)
    );
  }

  /**
   * Path part for operation campaignsSubscribePost
   */
  static readonly CampaignsSubscribePostPath = '/campaigns/subscribe';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `campaignsSubscribePost()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsSubscribePost$Response(params: {

    body: CampaignSubscriptionUpdate
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CampaignsService.CampaignsSubscribePostPath, 'post');
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
   * To access the full response (for headers, for example), `campaignsSubscribePost$Response()` instead.
   *
   * This method sends `application/json` and handles response body of type `application/json`
   */
  campaignsSubscribePost(params: {

    body: CampaignSubscriptionUpdate
  }): Observable<void> {

    return this.campaignsSubscribePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

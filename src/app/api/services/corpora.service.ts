/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CorpusFullSummary } from '../models/corpus-full-summary';
import { CorpusShortSummary } from '../models/corpus-short-summary';


/**
 * Endpoints to list and update audio corpora
 */
@Injectable({
  providedIn: 'root',
})
export class CorporaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation corporaListAllGet
   */
  static readonly CorporaListAllGetPath = '/corpora/list/all';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `corporaListAllGet()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaListAllGet$Response(params?: {

  }): Observable<StrictHttpResponse<Array<CorpusShortSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, CorporaService.CorporaListAllGetPath, 'get');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CorpusShortSummary>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `corporaListAllGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaListAllGet(params?: {

  }): Observable<Array<CorpusShortSummary>> {

    return this.corporaListAllGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CorpusShortSummary>>) => r.body as Array<CorpusShortSummary>)
    );
  }

  /**
   * Path part for operation corporaListCorpusNameGet
   */
  static readonly CorporaListCorpusNameGetPath = '/corpora/list/{corpus_name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `corporaListCorpusNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaListCorpusNameGet$Response(params: {
    corpusName: string;

  }): Observable<StrictHttpResponse<CorpusFullSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CorporaService.CorporaListCorpusNameGetPath, 'get');
    if (params) {

      rb.path('corpus_name', params.corpusName);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorpusFullSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `corporaListCorpusNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaListCorpusNameGet(params: {
    corpusName: string;

  }): Observable<CorpusFullSummary> {

    return this.corporaListCorpusNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<CorpusFullSummary>) => r.body as CorpusFullSummary)
    );
  }

  /**
   * Path part for operation corporaListForCampaignSlugGet
   */
  static readonly CorporaListForCampaignSlugGetPath = '/corpora/list/for/{campaign_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `corporaListForCampaignSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaListForCampaignSlugGet$Response(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<CorpusFullSummary>> {

    const rb = new RequestBuilder(this.rootUrl, CorporaService.CorporaListForCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

    }
    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CorpusFullSummary>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `corporaListForCampaignSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaListForCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<CorpusFullSummary> {

    return this.corporaListForCampaignSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<CorpusFullSummary>) => r.body as CorpusFullSummary)
    );
  }

  /**
   * Path part for operation corporaRefreshGet
   */
  static readonly CorporaRefreshGetPath = '/corpora/refresh';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `corporaRefreshGet()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaRefreshGet$Response(params?: {

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CorporaService.CorporaRefreshGetPath, 'get');
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
   * To access the full response (for headers, for example), `corporaRefreshGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaRefreshGet(params?: {

  }): Observable<void> {

    return this.corporaRefreshGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation corporaRefreshCorpusNameGet
   */
  static readonly CorporaRefreshCorpusNameGetPath = '/corpora/refresh/{corpus_name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `corporaRefreshCorpusNameGet()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaRefreshCorpusNameGet$Response(params: {
    corpusName: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CorporaService.CorporaRefreshCorpusNameGetPath, 'get');
    if (params) {

      rb.path('corpus_name', params.corpusName);

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
   * To access the full response (for headers, for example), `corporaRefreshCorpusNameGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  corporaRefreshCorpusNameGet(params: {
    corpusName: string;

  }): Observable<void> {

    return this.corporaRefreshCorpusNameGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

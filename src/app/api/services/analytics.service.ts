/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BaseService} from '../base-service';
import {ApiConfiguration} from '../api-configuration';
import {StrictHttpResponse} from '../strict-http-response';
import {RequestBuilder} from '../request-builder';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';


/**
 * Operations to display and compute analytics on campaigns
 */
@Injectable({
  providedIn: 'root',
})
export class AnalyticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation analyticsBasicCampainSlugGet
   */
  static readonly AnalyticsBasicCampainSlugGetPath = '/analytics/basic/{campain_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyticsBasicCampainSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  analyticsBasicCampainSlugGet$Response(params: {
    campainSlug: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnalyticsService.AnalyticsBasicCampainSlugGetPath, 'get');
    if (params) {

      rb.path('campain_slug', params.campainSlug);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `analyticsBasicCampainSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  analyticsBasicCampainSlugGet(params: {
    campainSlug: string;

  }): Observable<void> {

    return this.analyticsBasicCampainSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation analyticsCompleteCampainSlugGet
   */
  static readonly AnalyticsCompleteCampainSlugGetPath = '/analytics/complete/{campain_slug}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyticsCompleteCampainSlugGet()` instead.
   *
   * This method doesn't expect any response body
   */
  analyticsCompleteCampainSlugGet$Response(params: {
    campainSlug: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnalyticsService.AnalyticsCompleteCampainSlugGetPath, 'get');
    if (params) {

      rb.path('campain_slug', params.campainSlug);

    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `analyticsCompleteCampainSlugGet$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  analyticsCompleteCampainSlugGet(params: {
    campainSlug: string;

  }): Observable<void> {

    return this.analyticsCompleteCampainSlugGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation analyticsGammaPost
   */
  static readonly AnalyticsGammaPostPath = '/analytics/gamma';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyticsGammaPost()` instead.
   *
   * This method doesn't expect any response body
   */
  analyticsGammaPost$Response(params?: {}): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AnalyticsService.AnalyticsGammaPostPath, 'post');
    if (params) {


    }
    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `analyticsGammaPost$Response()` instead.
   *
   * This method doesn't expect any response body
   */
  analyticsGammaPost(params?: {}): Observable<void> {

    return this.analyticsGammaPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

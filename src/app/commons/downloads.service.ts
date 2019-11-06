/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {BaseService} from '../api/base-service';
import {ApiConfiguration} from '../api/api-configuration';
import {StrictHttpResponse} from '../api/strict-http-response';
import {RequestBuilder} from '../api/request-builder';

export interface TaskTextGridList {
  names?: Array<string>;
}


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

  downloadsTaskTaskIdStarterGet(params: {
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }


  /**
   * Path part for operation downloadsTaskTaskIdCurrentTextgridGet
   */
  static readonly DownloadsTaskTaskIdCurrentTextgridGetPath = '/downloads/task/{task_id}/current_textgrid';


  downloadsTaskTaskIdCurrentTextgridGet(params: {
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }


  /**
   * Path part for operation downloadsTaskTaskIdConflictLogGet
   */
  static readonly DownloadsTaskTaskIdConflictLogGetPath = '/downloads/task/{task_id}/conflict_log';


  downloadsTaskTaskIdConflictLogGet(params: {
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }


  /**
   * Path part for operation downloadsTaskTaskIdTextgridsGet
   */
  static readonly DownloadsTaskTaskIdTextgridsGetPath = '/downloads/task/{task_id}/textgrids';


  downloadsTaskTaskIdTextgridsGet(params: {
    taskId: string;

    body: TaskTextGridList
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdTextgridsGetPath, 'get');
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation downloadsTextgridTextgridIdGet
   */
  static readonly DownloadsTextgridTextgridIdGetPath = '/downloads/textgrid/{textgrid_id}';


  downloadsTextgridTextgridIdGet(params: {
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
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Path part for operation downloadsCampaignArchiveCampaignSlugGet
   */
  static readonly DownloadsCampaignArchiveCampaignSlugGetPath = '/downloads/campaign/archive/{campaign_slug}';


  downloadsCampaignArchiveCampaignSlugGet(params: {
    campaignSlug: string;

  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsCampaignArchiveCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

    }
    return window.open(rb.build()).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({body: undefined}) as StrictHttpResponse<void>;
      })
    );
  }


}

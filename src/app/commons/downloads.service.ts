/* tslint:disable */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from '../api/base-service';
import {ApiConfiguration} from '../api/api-configuration';
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

  }): void {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdStarterGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

    }
  }


  /**
   * Path part for operation downloadsTaskTaskIdCurrentTextgridGet
   */
  static readonly DownloadsTaskTaskIdCurrentTextgridGetPath = '/downloads/task/{task_id}/current_textgrid';


  downloadsTaskTaskIdCurrentTextgridGet(params: {
    taskId: string;

  }): void {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdCurrentTextgridGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

    }
  }


  /**
   * Path part for operation downloadsTaskTaskIdConflictLogGet
   */
  static readonly DownloadsTaskTaskIdConflictLogGetPath = '/downloads/task/{task_id}/conflict_log';


  downloadsTaskTaskIdConflictLogGet(params: {
    taskId: string;

  }): void {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdConflictLogGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

    }
  }


  /**
   * Path part for operation downloadsTaskTaskIdTextgridsGet
   */
  static readonly DownloadsTaskTaskIdTextgridsGetPath = '/downloads/task/{task_id}/textgrids';


  downloadsTaskTaskIdTextgridsGet(params: {
    taskId: string;

    body: TaskTextGridList
  }): void {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTaskTaskIdTextgridsGetPath, 'get');
    if (params) {

      rb.path('task_id', params.taskId);

      rb.body(params.body, 'application/json');
    }
  }

  /**
   * Path part for operation downloadsTextgridTextgridIdGet
   */
  static readonly DownloadsTextgridTextgridIdGetPath = '/downloads/textgrid/{textgrid_id}';


  downloadsTextgridTextgridIdGet(params: {
    textgridId: string;

  }): void {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsTextgridTextgridIdGetPath, 'get');
    if (params) {

      rb.path('textgrid_id', params.textgridId);

    }

  }

  /**
   * Path part for operation downloadsCampaignArchiveCampaignSlugGet
   */
  static readonly DownloadsCampaignArchiveCampaignSlugGetPath = '/downloads/campaign/archive/{campaign_slug}';


  downloadsCampaignArchiveCampaignSlugGet(params: {
    campaignSlug: string;

  }): void {

    const rb = new RequestBuilder(this.rootUrl, DownloadsService.DownloadsCampaignArchiveCampaignSlugGetPath, 'get');
    if (params) {

      rb.path('campaign_slug', params.campaignSlug);

    }
  }


}

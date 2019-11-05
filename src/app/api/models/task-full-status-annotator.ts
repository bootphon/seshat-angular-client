/* tslint:disable */
import {MergeConflicts} from './merge-conflicts';
import {UserShortProfile} from './user-short-profile';

export interface TaskFullStatusAnnotator {
  all_statuses?: Array<string>;
  allow_file_upload: boolean;
  allow_starter_dl: boolean;
  annotators?: Array<string>;
  assigner: UserShortProfile;
  campaign_slug: string;
  creation_time: string;
  current_instructions: string;
  current_status_idx: number;
  current_tg_download?: string;
  deadline?: string;
  filename: string;
  frontiers_merge_table?: MergeConflicts;
  id: string;
  is_locked: boolean;
  status: string;
  task_type: string;
}
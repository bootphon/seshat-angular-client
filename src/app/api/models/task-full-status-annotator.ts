/* tslint:disable */
import { CampaignShortProfile } from './campaign-short-profile';
import { TimeMergeError } from './time-merge-error';
import { UserShortProfile } from './user-short-profile';
export interface TaskFullStatusAnnotator  {
  all_steps?: Array<string>;
  allow_file_upload: boolean;
  allow_starter_dl: boolean;
  annotators?: Array<string>;
  assigner: UserShortProfile;
  campaign?: CampaignShortProfile;
  creation_time: string;
  current_instructions: string;
  current_step_idx: number;
  deadline?: string;
  filename: string;
  frontiers_merge_table?: Array<TimeMergeError>;
  id: string;
  is_done: boolean;
  is_locked: boolean;
  step: string;
  task_type: string;
}

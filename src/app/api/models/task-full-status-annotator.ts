/* tslint:disable */
import { CampaignShortProfile } from './campaign-short-profile';
import { DoubleAnnotatorData } from './double-annotator-data';
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
  double_annot_data?: DoubleAnnotatorData;
  filename: string;
  finish_time?: string;
  id: string;
  is_done: boolean;
  is_locked: boolean;
  step: string;
  task_type: string;
}

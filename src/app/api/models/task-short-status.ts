/* tslint:disable */
import { CampaignShortProfile } from './campaign-short-profile';
import { UserShortProfile } from './user-short-profile';
export interface TaskShortStatus  {
  annotators?: Array<string>;
  assigner: UserShortProfile;
  campaign?: CampaignShortProfile;
  creation_time: string;
  deadline?: string;
  filename: string;
  finish_time?: string;
  id: string;
  is_done: boolean;
  is_locked: boolean;
  step: string;
  task_type: string;
}

/* tslint:disable */
import { UserShortProfile } from './user-short-profile';
export interface TaskShortStatus  {
  annotators?: Array<string>;
  assigner: UserShortProfile;
  campaign_slug: string;
  creation_time: string;
  deadline?: string;
  filename: string;
  id: string;
  is_locked: boolean;
  step: string;
  task_type: string;
}

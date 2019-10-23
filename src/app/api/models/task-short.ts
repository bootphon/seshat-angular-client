/* tslint:disable */
import { UserShortProfile } from './user-short-profile';
export interface TaskShort  {
  annotators?: Array<string>;
  assigner: UserShortProfile;
  creation_time: string;
  deadline?: string;
  filename: string;
  id: string;
  is_locked: boolean;
  status: string;
  task_type: string;
}

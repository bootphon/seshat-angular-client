/* tslint:disable */
import { UserShortProfile } from './user-short-profile';
export interface TaskShortStatus  {
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

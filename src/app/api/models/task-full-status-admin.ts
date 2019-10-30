/* tslint:disable */
import { TaskTextGrid } from './task-text-grid';
import { UserShortProfile } from './user-short-profile';
export interface TaskFullStatusAdmin  {
  annotators?: Array<string>;
  assigner: UserShortProfile;
  creation_time: string;
  deadline?: string;
  filename: string;
  id: string;
  is_locked: boolean;
  status: string;
  task_type: string;
  textgrids?: Array<TaskTextGrid>;
}

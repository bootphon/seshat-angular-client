/* tslint:disable */
import { TaskShort } from './task-short';
export interface AnnotatorFullProfile  {
  active_tasks: number;
  assigned_tasks: number;
  creation_date: string;
  email: string;
  finished_tasks: number;
  first_name: string;
  fullname: string;
  is_locked: boolean;
  last_activity: string;
  last_name: string;
  tasks?: Array<TaskShort>;
  type: string;
  username: string;
}

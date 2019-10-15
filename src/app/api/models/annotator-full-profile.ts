/* tslint:disable */
import { TaskShort } from './task-short';
export interface AnnotatorFullProfile  {
  active_tasks: number;
  assigned_tasks: number;
  creation_date: string;
  email: string;
  finished_tasks: number;
  fullname: string;
  last_activity: string;
  tasks?: Array<TaskShort>;
  username: string;
}

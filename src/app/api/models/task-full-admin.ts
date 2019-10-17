/* tslint:disable */
import { TaskComment } from './task-comment';
import { TaskTextGrid } from './task-text-grid';
export interface TaskFullAdmin  {
  annotators?: Array<string>;
  assigner: string;
  comments?: Array<TaskComment>;
  creation_time: string;
  deadline?: string;
  filename: string;
  id: string;
  is_locked: boolean;
  status: string;
  task_type: string;
  textgrids?: Array<TaskTextGrid>;
}

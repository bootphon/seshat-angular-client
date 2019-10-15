/* tslint:disable */
import { TaskShort } from './task-short';
export interface CampaignFull  {
  annotators?: Array<string>;
  assigned_files: number;
  check_textgrids: boolean;
  completed_tasks: number;
  corpus_path: string;
  name: string;
  tasks?: Array<TaskShort>;
  tiers_number?: number;
  total_files: number;
  total_tasks: number;
}

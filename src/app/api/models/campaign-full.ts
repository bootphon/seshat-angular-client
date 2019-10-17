/* tslint:disable */
import { TaskShort } from './task-short';
import { UserShortProfile } from './user-short-profile';
export interface CampaignFull  {
  annotators?: Array<string>;
  assigned_files: number;
  check_textgrids: boolean;
  completed_tasks: number;
  corpus_path: string;
  creator: UserShortProfile;
  name: string;
  slug: string;
  tasks?: Array<TaskShort>;
  tiers_number?: number;
  total_files: number;
  total_tasks: number;
}

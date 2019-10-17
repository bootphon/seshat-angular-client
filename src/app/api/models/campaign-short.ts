/* tslint:disable */
import { UserShortProfile } from './user-short-profile';
export interface CampaignShort  {
  annotators?: Array<string>;
  assigned_files: number;
  check_textgrids: boolean;
  completed_tasks: number;
  corpus_path: string;
  creator: UserShortProfile;
  name: string;
  slug: string;
  tiers_number?: number;
  total_files: number;
  total_tasks: number;
}

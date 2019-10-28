/* tslint:disable */
import { CampaignStats } from './campaign-stats';
import { TaskShort } from './task-short';
import { UserShortProfile } from './user-short-profile';
export interface CampaignFull  {
  annotators?: Array<string>;
  check_textgrids: boolean;
  corpus_path: string;
  creator: UserShortProfile;
  name: string;
  slug: string;
  stats?: CampaignStats;
  subscribers?: Array<string>;
  tasks?: Array<TaskShort>;
  tiers_number?: number;
}

/* tslint:disable */
import { CampaignStats } from './campaign-stats';
import { UserShortProfile } from './user-short-profile';
export interface CampaignStatus  {
  annotators?: Array<UserShortProfile>;
  check_textgrids: boolean;
  corpus_path: string;
  creator: UserShortProfile;
  name: string;
  slug: string;
  stats?: CampaignStats;
  subscribers?: Array<string>;
  tiers_number?: number;
}

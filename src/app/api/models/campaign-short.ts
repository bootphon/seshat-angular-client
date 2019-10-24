/* tslint:disable */
import { CampaignStats } from './campaign-stats';
import { UserShortProfile } from './user-short-profile';
export interface CampaignShort  {
  annotators?: Array<string>;
  check_textgrids: boolean;
  corpus_path: string;
  creator: UserShortProfile;
  name: string;
  slug: string;
  stats?: CampaignStats;
  tiers_number?: number;
}

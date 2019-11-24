/* tslint:disable */
import { TierSpecifications } from './tier-specifications';
export interface CampaignCreation  {
  check_textgrids?: boolean;
  checking_scheme?: Array<TierSpecifications>;
  corpus: string;
  description: string;
  enable_audio_dl: boolean;
  name: string;
}

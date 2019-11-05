/* tslint:disable */
import {TierSpecifications} from './tier-specifications';

export interface CampaignCreation {
  check_textgrids?: boolean;
  checking_scheme?: Array<TierSpecifications>;
  data_csv?: string;
  data_folder?: string;
  description?: string;
  enable_audio_dl: boolean;
  name: string;
}

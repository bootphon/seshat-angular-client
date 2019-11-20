/* tslint:disable */
import { TierSpecifications } from './tier-specifications';
export interface CheckingSchemeSummary  {
  id: string;
  name: string;
  tier_specs?: Array<TierSpecifications>;
}

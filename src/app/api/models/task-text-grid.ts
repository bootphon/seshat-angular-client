/* tslint:disable */
import { UserShortProfile } from './user-short-profile';
export interface TaskTextGrid  {
  created?: string;
  creators?: Array<UserShortProfile>;
  has_been_submitted: boolean;
  id?: string;
  name: string;
}

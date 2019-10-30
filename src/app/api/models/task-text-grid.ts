/* tslint:disable */
import { UserShortProfile } from './user-short-profile';
export interface TaskTextGrid  {
  created?: string;
  creators?: Array<UserShortProfile>;
  id?: string;
  is_done: boolean;
  name: string;
}

/* tslint:disable */
import { TimeMergeError } from './time-merge-error';
import { UserShortProfile } from './user-short-profile';
export interface DoubleAnnotatorData  {
  current_user_role: string;
  frontiers_merge_table?: Array<TimeMergeError>;
  reference: UserShortProfile;
  target: UserShortProfile;
}

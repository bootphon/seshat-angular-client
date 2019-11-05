/* tslint:disable */
import {FrontierMergeConflict} from './frontier-merge-conflict';

export interface TierMergeConflicts {
  frontiers_merge?: Array<FrontierMergeConflict>;
  tier_a: string;
  tier_b: string;
}

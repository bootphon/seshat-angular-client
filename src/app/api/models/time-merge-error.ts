/* tslint:disable */
export interface TimeMergeError {
  index_after: number;
  index_before: number;
  threshold: number;
  tier_a: string;
  tier_b: string;
  time_a: number;
  time_b: number;
}

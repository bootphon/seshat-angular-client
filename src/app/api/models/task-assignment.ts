/* tslint:disable */
import { DoubleAnnotatorAssignment } from './double-annotator-assignment';
import { SingleAnnotatorAssignment } from './single-annotator-assignment';
export interface TaskAssignment  {
  audio_files?: Array<string>;
  campaign: string;
  deadline?: string;
  double_annot_assign?: DoubleAnnotatorAssignment;
  single_annot_assign?: SingleAnnotatorAssignment;
}

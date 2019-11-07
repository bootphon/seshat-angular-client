/* tslint:disable */
import { AnnotMismatchError } from './annot-mismatch-error';
import { AnnotationErrors } from './annotation-errors';
import { StructuralError } from './structural-error';
import { TimeMergeError } from './time-merge-error';
export interface TextGridErrors  {
  annot?: { [key: string]: AnnotationErrors };
  annot_mismatch?: Array<AnnotMismatchError>;
  structural?: Array<StructuralError>;
  time_conflict?: Array<TimeMergeError>;
}

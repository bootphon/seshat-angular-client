/* tslint:disable */
import { AnnotMismatchError } from './annot-mismatch-error';
import { AnnotationError } from './annotation-error';
import { StructuralError } from './structural-error';
import { TimeMergeError } from './time-merge-error';
export interface TextGridErrors  {
  annot?: { [key: string]: Array<AnnotationError> };
  annot_mismatch?: Array<AnnotMismatchError>;
  has_errors: boolean;
  structural?: Array<StructuralError>;
  time_conflict?: Array<TimeMergeError>;
}

/* tslint:disable */
import { ParserClass } from './parser-class';
export interface TierSpecifications  {
  allow_empty?: boolean;
  categories?: Array<string>;
  checking_type?: string;
  name: string;
  parser?: ParserClass;
  required: boolean;
}

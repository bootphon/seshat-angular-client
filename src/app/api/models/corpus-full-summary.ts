/* tslint:disable */
import { CorpusFile } from './corpus-file';
export interface CorpusFullSummary  {
  files?: Array<CorpusFile>;
  files_count: number;
  last_refreshed: string;
  path: string;
  type: string;
}

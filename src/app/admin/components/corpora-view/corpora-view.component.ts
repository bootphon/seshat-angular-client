import {Component, OnInit, ViewChild} from '@angular/core';
import {CorporaService} from '../../../api/services/corpora.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {CorpusFile} from '../../../api/models/corpus-file';
import {CorpusFullSummary} from '../../../api/models/corpus-full-summary';

@Component({
  selector: 'seshat-corpora-view',
  templateUrl: './corpora-view.component.html',
  styleUrls: ['./corpora-view.component.scss']
})
export class CorporaViewComponent implements OnInit {
  corpusSummary: CorpusFullSummary;
  refreshingFiles = false;
  corpusFilesList = new MatTableDataSource<CorpusFile>();
  displayedColumns = ['filename', 'duration'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private corporaService: CorporaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const corpusName = this.route.snapshot.paramMap.get('corpus_name');
    this.getCorpusData(corpusName);
  }

  getCorpusData(corpusName: string) {
    this.corporaService.corporaListCorpusNameGet({corpusName: corpusName}).subscribe(
      (data) => {
        this.corpusFilesList = new MatTableDataSource(data.files);
        this.corpusSummary = data;
        this.corpusFilesList.sort = this.sort;
        this.corpusFilesList.paginator = this.paginator;
        this.refreshingFiles = false;
      }
    );
  }

  refreshCorpusFiles() {
    this.refreshingFiles = true;
    this.corporaService.corporaRefreshCorpusNameGet({corpusName: this.corpusSummary.path}).subscribe(
      () => {
        this.getCorpusData(this.corpusSummary.path);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.corpusFilesList.filter = filterValue.trim().toLowerCase();

    if (this.corpusFilesList.paginator) {
      this.corpusFilesList.paginator.firstPage();
    }
  }

}

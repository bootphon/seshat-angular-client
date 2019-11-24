import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {CorporaService} from '../../../api/services/corpora.service';
import {CorpusShortSummary} from '../../../api/models';

@Component({
  selector: 'seshat-corpora-list',
  templateUrl: './corpora-list.component.html',
  styleUrls: ['./corpora-list.component.scss']
})
export class CorporaListComponent implements OnInit {
  corporaList = new MatTableDataSource<CorpusShortSummary>();
  refreshing = false;
  displayedColumns = ['path', 'type', 'files_count', 'last_refreshed'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private corporaService: CorporaService,
  ) { }

  ngOnInit() {
    this.getCorporaList();
  }

  getCorporaList() {
    this.corporaService.corporaListAllGet().subscribe(
      (data) => {
        this.corporaList = new MatTableDataSource<CorpusShortSummary>(data);
        this.corporaList.sort = this.sort;
        this.refreshing = false;
      }
    );
  }

  refreshCorporaList() {
    this.refreshing = true;
    this.corporaService.corporaRefreshGet().subscribe(
      () => {
        this.getCorporaList();
      }
    );
  }

  applyFilter(filterValue: string) {
    this.corporaList.filter = filterValue.trim().toLowerCase();
  }

}

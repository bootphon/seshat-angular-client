import {Component, OnInit, ViewChild} from '@angular/core';
import {AnnotatorShortProfile} from '../../../api/models/annotator-short-profile';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AnnotatorsService} from '../../../api/services/annotators.service';

@Component({
  selector: 'seshat-annotators-list',
  templateUrl: './annotators-list.component.html',
  styleUrls: ['./annotators-list.component.scss']
})
export class AnnotatorsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'username', 'last-activity', 'assigned-tasks', 'active-tasks', 'finished-tasks'];
  annotatorsList: MatTableDataSource<AnnotatorShortProfile>;
  // TODO : check what the viewchild means
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private annotatorsService: AnnotatorsService) { }

  ngOnInit() {
    // TODO : retrieve the annotators profile list and cast it as a datasource
    //  using MatTableDataSource(userlist)
  }

  openAnnotatorDialog(username: string) {}
  openAddAnnotatorDialog() {}

}

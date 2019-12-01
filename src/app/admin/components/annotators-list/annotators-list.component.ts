import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AnnotatorsService} from '../../../api/services/annotators.service';
import {AnnotatorProfile} from '../../../api/models/annotator-profile';
import {Router} from '@angular/router';

@Component({
  selector: 'seshat-annotators-list',
  templateUrl: './annotators-list.component.html',
  styleUrls: ['./annotators-list.component.scss']
})
export class AnnotatorsListComponent implements OnInit {
  displayedColumns: string[] = ['fullname', 'username', 'last_activity', 'assigned_tasks', 'active_tasks', 'finished_tasks', 'is_locked'];
  annotatorsList: MatTableDataSource<AnnotatorProfile>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private annotatorsService: AnnotatorsService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.annotatorsService.annotatorsListGet().subscribe(
      (data) => {
        this.annotatorsList = new MatTableDataSource(data);
        this.annotatorsList.sort = this.sort;
        this.annotatorsList.paginator = this.paginator;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.annotatorsList.filter = filterValue.trim().toLowerCase();

    if (this.annotatorsList.paginator) {
      this.annotatorsList.paginator.firstPage();
    }
  }

  openAnnotatorDialog(username: string) {
    this.router.navigate(['/admin', 'annotators', 'view', username]);
  }

  updateAnnotatorLock(annotator: AnnotatorProfile){
    this.annotatorsService.annotatorsLockPost(
      {body:
          {username: annotator.username,
          lock_status: !annotator.is_locked}}
          ).subscribe(
      () => {
        annotator.is_locked = !annotator.is_locked;
      }
    );
  }

  openAddAnnotatorDialog() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {TimeMergeError} from '../../../../api/models/time-merge-error';

@Component({
  selector: 'seshat-merge-mismatch-table',
  templateUrl: './merge-mismatch-table.component.html',
  styleUrls: ['./merge-mismatch-table.component.scss']
})
export class MergeMismatchTableComponent implements OnInit {
  @Input() timesMergeMismatch : MatTableDataSource<TimeMergeError>;
  conflictsTableColumns = ['tier_a', 'tier_b', 'time_a', 'time_b', 'index_before', 'index_after'];

  constructor() { }

  ngOnInit() {
  }

}

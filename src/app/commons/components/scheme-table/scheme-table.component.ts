import {Component, Input, OnInit} from '@angular/core';
import {TierSpecifications} from '../../../api/models/tier-specifications';

@Component({
  selector: 'seshat-scheme-table',
  templateUrl: './scheme-table.component.html',
  styleUrls: ['./scheme-table.component.scss']
})
export class SchemeTableComponent implements OnInit {
  @Input() checkingSchemeSpecs: TierSpecifications[];
  constructor() { }

  ngOnInit() {
  }

}

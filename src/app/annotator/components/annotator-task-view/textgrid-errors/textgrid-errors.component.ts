import {Component, Input, OnInit} from '@angular/core';
import {TextGridErrors} from '../../../../api/models/text-grid-errors';

@Component({
  selector: 'seshat-textgrid-errors',
  templateUrl: './textgrid-errors.component.html',
  styleUrls: ['./textgrid-errors.component.scss']
})
export class TextgridErrorsComponent implements OnInit {
  @Input() tgErrors: TextGridErrors;
  constructor() { }

  ngOnInit() {
  }

}

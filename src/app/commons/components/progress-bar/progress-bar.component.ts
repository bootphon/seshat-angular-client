import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'seshat-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() completed: number;
  @Input() total: number;
  @Input() completedAdjective: string;
  constructor() { }

  ngOnInit() {
  }

}

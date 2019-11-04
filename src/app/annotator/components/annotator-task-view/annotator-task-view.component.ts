import {Component, OnInit} from '@angular/core';
import {TasksService} from '../../../api/services/tasks.service';
import {TaskFullStatusAnnotator} from '../../../api/models/task-full-status-annotator';
import {ActivatedRoute} from '@angular/router';
import {StepState} from '@angular/cdk/stepper';


@Component({
  selector: 'seshat-annotator-task-view',
  templateUrl: './annotator-task-view.component.html',
  styleUrls: ['./annotator-task-view.component.scss']
})
export class AnnotatorTaskViewComponent implements OnInit {
  taskData: TaskFullStatusAnnotator;
  taskId: string;
  currentStepIdx = 0;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('task_id');
    this.tasksService.tasksStatusAnnotatorTaskIdGet({taskId: this.taskId}).subscribe(
      (data) => {
        this.taskData = data;
      }
    );
  }
  validateTextGrid() {}
  submitTextGrid() {}

}

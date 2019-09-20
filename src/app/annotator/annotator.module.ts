import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnotatorTaskViewComponent} from './annotator-task-view/annotator-task-view.component';
import {AnnotatorTaskListComponent} from '../admin/pages/annotator-task-list/annotator-task-list.component';
import {AnnotatorRoutingModule} from './annotator-routing.module';


@NgModule({
  declarations: [
    AnnotatorTaskListComponent,
    AnnotatorTaskViewComponent
  ],
  imports: [
    CommonModule,
    AnnotatorRoutingModule
  ]
})
export class AnnotatorModule { }

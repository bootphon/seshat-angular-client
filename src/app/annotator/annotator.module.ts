import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnotatorTaskViewComponent} from './annotator-task-view/annotator-task-view.component';
import {AnnotatorRoutingModule} from './annotator-routing.module';
import {AnnotatorWikiViewComponent} from './annotator-wiki-view/annotator-wiki-view.component';
import {AnnotatorAssignedTasksComponent} from './annotator-assigned-tasks/annotator-assigned-tasks.component';


@NgModule({
  declarations: [
    AnnotatorTaskViewComponent,
    AnnotatorWikiViewComponent,
    AnnotatorAssignedTasksComponent
  ],
  imports: [
    CommonModule,
    AnnotatorRoutingModule
  ]
})
export class AnnotatorModule { }

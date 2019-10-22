import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnotatorTaskViewComponent} from './components/annotator-task-view/annotator-task-view.component';
import {AnnotatorRoutingModule} from './annotator-routing.module';
import {AnnotatorWikiViewComponent} from './components/annotator-wiki-view/annotator-wiki-view.component';
import {AnnotatorAssignedTasksComponent} from './components/annotator-assigned-tasks/annotator-assigned-tasks.component';
import {MatButtonModule, MatIconModule, MatSortModule, MatTableModule, MatTabsModule} from '@angular/material';


@NgModule({
  declarations: [
    AnnotatorTaskViewComponent,
    AnnotatorWikiViewComponent,
    AnnotatorAssignedTasksComponent,
  ],
  imports: [
    CommonModule,
    AnnotatorRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AnnotatorModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AnnotatorTaskViewComponent} from './annotator-task-view/annotator-task-view.component';
import {AnnotatorTaskListComponent} from '../admin/annotator-task-list/annotator-task-list.component';

const routes: Routes = [
  { path: '', component: AnnotatorTaskListComponent },
  { path: ':task_id', component: AnnotatorTaskViewComponent},
];

@NgModule({
  declarations: [
    AnnotatorTaskListComponent,
    AnnotatorTaskViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AnnotatorModule { }

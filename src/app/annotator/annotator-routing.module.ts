import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AnnotatorTaskListComponent} from '../admin/pages/annotator-task-list/annotator-task-list.component';
import {AnnotatorTaskViewComponent} from './annotator-task-view/annotator-task-view.component';


const routes: Routes = [
  { path: '', component: AnnotatorTaskListComponent },
  { path: ':task_id', component: AnnotatorTaskViewComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AnnotatorRoutingModule { }

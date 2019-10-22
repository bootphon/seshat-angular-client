import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AnnotatorTaskViewComponent} from './components/annotator-task-view/annotator-task-view.component';
import {AnnotatorAssignedTasksComponent} from './components/annotator-assigned-tasks/annotator-assigned-tasks.component';


const routes: Routes = [
  { path: '', component: AnnotatorAssignedTasksComponent },
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

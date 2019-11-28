import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnotatorTaskViewComponent} from './components/annotator-task-view/annotator-task-view.component';
import {AnnotatorWikiViewComponent} from './components/annotator-wiki-view/annotator-wiki-view.component';
import {AnnotatorAssignedTasksComponent} from './components/annotator-assigned-tasks/annotator-assigned-tasks.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule,
  MatSortModule, MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {AnnotatorGuard, AuthGard} from '../commons/auth.gard';
import {ShowdownModule} from 'ngx-showdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonsModule} from '../commons/commons.module';
import {MaterialFileInputModule} from 'ngx-material-file-input';


const routes: Routes = [
  {path: 'tasks', component: AnnotatorAssignedTasksComponent, canActivate: [AuthGard, AnnotatorGuard]},
  {path: 'task/:task_id', component: AnnotatorTaskViewComponent, canActivate: [AuthGard, AnnotatorGuard]},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AnnotatorTaskViewComponent,
    AnnotatorWikiViewComponent,
    AnnotatorAssignedTasksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    ShowdownModule,
    MatToolbarModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonsModule,
    MaterialFileInputModule,
    MatTooltipModule
  ]
})
export class AnnotatorModule {
}

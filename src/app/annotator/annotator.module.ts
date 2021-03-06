import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnotatorTaskViewComponent} from './components/annotator-task-view/annotator-task-view.component';
import {AnnotatorAssignedTasksComponent} from './components/annotator-assigned-tasks/annotator-assigned-tasks.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule, MatInputModule, MatListModule,
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
import { TaskStatusComponent } from './components/annotator-task-view/task-status/task-status.component';
import { TextgridErrorsComponent } from './components/annotator-task-view/textgrid-errors/textgrid-errors.component';
import { MergeMismatchTableComponent } from './components/annotator-task-view/merge-mismatch-table/merge-mismatch-table.component';

import {MatExpansionModule} from '@angular/material/expansion';
import {TaskHelpComponent} from './components/annotator-task-view/task-help/task-help.component';

const routes: Routes = [
  {path: 'tasks', component: AnnotatorAssignedTasksComponent, canActivate: [AuthGard, AnnotatorGuard]},
  {path: 'task/:task_id', component: AnnotatorTaskViewComponent, canActivate: [AuthGard, AnnotatorGuard]},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AnnotatorTaskViewComponent,
    AnnotatorAssignedTasksComponent,
    TaskStatusComponent,
    TaskHelpComponent,
    TextgridErrorsComponent,
    MergeMismatchTableComponent,
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
    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    MatBadgeModule
  ]
})
export class AnnotatorModule {
}

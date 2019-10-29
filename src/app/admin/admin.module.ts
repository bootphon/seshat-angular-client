import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './components/campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './components/annotators-list/annotators-list.component';
import {TaskViewComponent} from './components/task-view/task-view.component';
import {AnnotatorsViewComponent} from './components/annotators-view/annotators-view.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule, MatRadioModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {CampaignWikiEditComponent} from './components/campaign-wiki-edit/campaign-wiki-edit.component';
import {CampaignCreationComponent} from './components/campaign-creation/campaign-creation.component';
import {AnnotatorCreationComponent} from './components/annotator-creation/annotator-creation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TasksListComponent} from './components/tasks-list/tasks-list.component';
import {CommonsModule} from '../commons/commons.module';
import {CampaignAnalyticsComponent} from './components/campaign-analytics/campaign-analytics.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard, AuthGard} from '../commons/auth.gard';
import {TaskAssignComponent} from './components/task-assign/task-assign.component';
import {ShowdownModule} from 'ngx-showdown';


const routes: Routes = [
  { path: 'campaign/list', component: CampaignsListComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'campaign/create', component: CampaignCreationComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'annotators/create', component: AnnotatorCreationComponent, canActivate: [AuthGard, AdminGuard] },
  { path: 'campaign/:campaign_slug', component: CampaignViewComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'campaign/:campaign_slug/assign', component: TaskAssignComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'campaign/:campaign_slug/wiki/edit', component: CampaignWikiEditComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'tasks/view/:task_id', component: TaskViewComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'annotators', component: AnnotatorsListComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'annotators/view/:username', component: AnnotatorsViewComponent, canActivate: [AuthGard, AdminGuard]},
  { path: '', redirectTo: 'campaign/list', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    CampaignViewComponent,
    CampaignsListComponent,
    TaskViewComponent,
    AnnotatorsListComponent,
    AnnotatorsViewComponent,
    CampaignWikiEditComponent,
    CampaignCreationComponent,
    AnnotatorCreationComponent,
    TasksListComponent,
    CampaignAnalyticsComponent,
    TaskAssignComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatTabsModule,
    FormsModule,
    CommonsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
    MatButtonToggleModule,
    MatChipsModule,
    ShowdownModule,
    MatRadioModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ]
})
export class AdminModule { }

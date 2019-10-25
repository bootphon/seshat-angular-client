import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './components/campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './components/annotators-list/annotators-list.component';
import {TaskViewComponent} from './components/task-view/task-view.component';
import {AnnotatorsViewComponent} from './components/annotators-view/annotators-view.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
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
import {FormsModule} from '@angular/forms';
import {TasksListComponent} from './components/tasks-list/tasks-list.component';
import {CommonsModule} from '../commons/commons.module';
import {CampaignAnalyticsComponent} from './components/campaign-analytics/campaign-analytics.component';
import {RouterModule, Routes} from '@angular/router';
import {AdminGuard, AuthGard} from '../commons/auth.gard';


const routes: Routes = [
  { path: 'campaign/list', component: CampaignsListComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'campaign/create', component: CampaignCreationComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'annotator/create', component: AnnotatorCreationComponent, canActivate: [AuthGard, AdminGuard] },
  { path: 'campaign/:campaign_id', component: CampaignViewComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'campaign/:campaign_id/task/:task_id', component: TaskViewComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'annotators', component: AnnotatorsListComponent, canActivate: [AuthGard, AdminGuard]},
  { path: 'annotators/:annotator_id', component: AnnotatorsViewComponent, canActivate: [AuthGard, AdminGuard]},
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
  ]
})
export class AdminModule { }

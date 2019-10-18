import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './pages/campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './pages/campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './pages/annotators-list/annotators-list.component';
import {TaskViewComponent} from './pages/task-view/task-view.component';
import {AnnotatorsViewComponent} from './pages/annotators-view/annotators-view.component';
import {AdminRoutingModule} from './admin-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule, MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule, MatTabsModule, MatTooltipModule
} from '@angular/material';
import {CampaignWikiEditComponent} from './pages/campaign-wiki-edit/campaign-wiki-edit.component';
import {CampaignCreationComponent} from './pages/campaign-creation/campaign-creation.component';
import {AnnotatorCreationComponent} from './pages/annotator-creation/annotator-creation.component';
import {FormsModule} from '@angular/forms';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import {CommonsModule} from '../commons/commons.module';
import { CampaignAnalyticsComponent } from './pages/campaign-analytics/campaign-analytics.component';


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
    AdminRoutingModule,
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
    CommonsModule
  ]
})
export class AdminModule { }

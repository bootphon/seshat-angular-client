import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './components/campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './components/campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './components/annotators-list/annotators-list.component';
import {TaskViewComponent} from './components/task-view/task-view.component';
import {AnnotatorsViewComponent} from './components/annotators-view/annotators-view.component';
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
import {CampaignWikiEditComponent} from './components/campaign-wiki-edit/campaign-wiki-edit.component';
import {CampaignCreationComponent} from './components/campaign-creation/campaign-creation.component';
import {AnnotatorCreationComponent} from './components/annotator-creation/annotator-creation.component';
import {FormsModule} from '@angular/forms';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import {CommonsModule} from '../commons/commons.module';
import { CampaignAnalyticsComponent } from './components/campaign-analytics/campaign-analytics.component';


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

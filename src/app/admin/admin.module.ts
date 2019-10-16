import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './pages/campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './pages/campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './pages/annotators-list/annotators-list.component';
import {AdminTaskViewComponent} from './pages/admin-task-view/admin-task-view.component';
import {AnnotatorsViewComponent} from './pages/annotators-view/annotators-view.component';
import {AdminRoutingModule} from './admin-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule, MatPaginatorModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {CampaignWikiEditComponent} from './pages/campaign-wiki-edit/campaign-wiki-edit.component';
import {CampaignCreationComponent} from './pages/campaign-creation/campaign-creation.component';
import {AnnotatorEditionComponent} from './pages/annotator-edition/annotator-edition.component';
import {AnnotatorCreationComponent} from './pages/annotator-creation/annotator-creation.component';


@NgModule({
  declarations: [
    CampaignViewComponent,
    CampaignsListComponent,
    AdminTaskViewComponent,
    AnnotatorsListComponent,
    AnnotatorsViewComponent,
    CampaignWikiEditComponent,
    CampaignCreationComponent,
    AnnotatorEditionComponent,
    AnnotatorCreationComponent
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
    MatPaginatorModule
  ]
})
export class AdminModule { }

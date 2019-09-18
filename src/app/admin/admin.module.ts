import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './annotators-list/annotators-list.component';
import {AdminTaskViewComponent} from './admin-task-view/admin-task-view.component';
import {AnnotatorsViewComponent} from './annotators-view/annotators-view.component';
import {MenubarComponent} from '../commons/menubar/menubar.component';
import {TitlebarComponent} from '../commons/titlebar/titlebar.component';
import {AdminRoutingModule} from './admin-routing.module';


@NgModule({
  declarations: [
    MenubarComponent,
    TitlebarComponent,
    CampaignViewComponent,
    CampaignsListComponent,
    AdminTaskViewComponent,
    AnnotatorsListComponent,
    AnnotatorsViewComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

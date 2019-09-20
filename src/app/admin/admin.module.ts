import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignsListComponent} from './pages/campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './pages/campaign-view/campaign-view.component';
import {AnnotatorsListComponent} from './pages/annotators-list/annotators-list.component';
import {AdminTaskViewComponent} from './pages/admin-task-view/admin-task-view.component';
import {AnnotatorsViewComponent} from './pages/annotators-view/annotators-view.component';
import {MenubarComponent} from '../commons/components/menubar/menubar.component';
import {TitlebarComponent} from '../commons/components/titlebar/titlebar.component';
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

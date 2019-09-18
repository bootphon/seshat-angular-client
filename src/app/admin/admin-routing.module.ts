import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CampaignsListComponent} from './campaigns-list/campaigns-list.component';
import {CampaignViewComponent} from './campaign-view/campaign-view.component';
import {AdminTaskViewComponent} from './admin-task-view/admin-task-view.component';
import {AnnotatorsListComponent} from './annotators-list/annotators-list.component';
import {AnnotatorsViewComponent} from './annotators-view/annotators-view.component';


const routes: Routes = [
  { path: '', component: CampaignsListComponent },
  { path: 'campaign/:campaign_id', component: CampaignViewComponent},
  { path: 'campaign/:campaign_id/task/:task_id', component: AdminTaskViewComponent},
  { path: 'annotators/', component: AnnotatorsListComponent},
  { path: 'annotators/:annotator_id', component: AnnotatorsViewComponent},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminRoutingModule { }

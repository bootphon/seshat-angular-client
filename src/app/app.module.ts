import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './commons/menubar/menubar.component';
import { TitlebarComponent } from './commons/titlebar/titlebar.component';
import { CampaignsListComponent } from './admin/campaigns-list/campaigns-list.component';
import { CampaignCreationComponent } from './admin/campaign-creation/campaign-creation.component';
import { LoginComponent } from './commons/login/login.component';
import { CampaignViewComponent } from './admin/campaign-view/campaign-view.component';
import { AdminTaskViewComponent } from './admin/admin-task-view/admin-task-view.component';
import { CommentsComponent } from './commons/comments/comments.component';
import { TaskAssignComponent } from './admin/task-assign/task-assign.component';
import { AnnotatorsListComponent } from './admin/annotators-list/annotators-list.component';
import { AnnotatorsViewComponent } from './admin/annotators-view/annotators-view.component';
import { AnnotatorCreationComponent } from './admin/annotator-creation/annotator-creation.component';
import { AnnotatorEditionComponent } from './admin/annotator-edition/annotator-edition.component';
import { AnnotatorTaskListComponent } from './admin/annotator-task-list/annotator-task-list.component';
import { NotificationsListComponent } from './commons/notifications-list/notifications-list.component';
import { CampaignWikiEditComponent } from './admin/campaign-wiki-edit/campaign-wiki-edit.component';
import { TaskViewComponent } from './admin/task-view/task-view.component';
import { AnnotatorAssignedTasksComponent } from './annotator/annotator-assigned-tasks/annotator-assigned-tasks.component';
import { AnnotatorTaskViewComponent } from './annotator/annotator-task-view/annotator-task-view.component';
import { AnnotatorWikiViewComponent } from './annotator/annotator-wiki-view/annotator-wiki-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    TitlebarComponent,
    CampaignsListComponent,
    CampaignCreationComponent,
    LoginComponent,
    CampaignViewComponent,
    AdminTaskViewComponent,
    CommentsComponent,
    TaskAssignComponent,
    AnnotatorsListComponent,
    AnnotatorsViewComponent,
    AnnotatorCreationComponent,
    AnnotatorEditionComponent,
    AnnotatorTaskListComponent,
    NotificationsListComponent,
    CampaignWikiEditComponent,
    TaskViewComponent,
    AnnotatorAssignedTasksComponent,
    AnnotatorTaskViewComponent,
    AnnotatorWikiViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

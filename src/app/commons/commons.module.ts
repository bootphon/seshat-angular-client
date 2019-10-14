import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent, MenubarComponent, NotificationsListComponent, TitlebarComponent} from './components';
import {MatExpansionModule, MatSidenavModule, MatToolbarModule} from '@angular/material';


// TODO : add all components to declarations and exports
@NgModule({
  declarations: [
    CommentsComponent,
    MenubarComponent,
    NotificationsListComponent,
    TitlebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSidenavModule,
  ],
  exports : [
    CommentsComponent,
    MenubarComponent,
    NotificationsListComponent,
    TitlebarComponent
  ]
})
export class CommonsModule { }

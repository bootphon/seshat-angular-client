import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent, MenubarComponent, NotificationsListComponent, TitlebarComponent} from './components';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule, MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {RouterModule} from '@angular/router';


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
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    RouterModule,
    MatMenuModule
  ],
  exports : [
    CommentsComponent,
    MenubarComponent,
    NotificationsListComponent,
    TitlebarComponent
  ]
})
export class CommonsModule { }

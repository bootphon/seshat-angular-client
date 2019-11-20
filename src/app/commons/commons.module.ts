import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent, MenubarComponent} from './components';
import {
  MatBadgeModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatSidenavModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UserlistComponent } from './components/userlist/userlist.component';


// TODO : add all components to declarations and exports
@NgModule({
  declarations: [
    CommentsComponent,
    MenubarComponent,
    UserlistComponent,
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
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatBadgeModule,
    MatSnackBarModule,
  ],
  exports: [
    CommentsComponent,
    MenubarComponent,
    UserlistComponent
  ],
})
export class CommonsModule {
}

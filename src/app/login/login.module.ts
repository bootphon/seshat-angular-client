import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginRoutingModule } from './login-routing.module';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginModule { }

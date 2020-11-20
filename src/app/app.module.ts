import {BrowserModule} from '@angular/platform-browser';
import {forwardRef, NgModule, Provider} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiInterceptor} from './commons/api-interceptor';
import {ApiModule} from './api/api.module';
import {MatSidenavModule} from '@angular/material';
import {CommonsModule} from './commons/commons.module';
import {MatDialogModule} from '@angular/material/dialog'; // todo remove
import { environment } from '../environments/environment';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => ApiInterceptor),
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatDialogModule,
    ApiModule.forRoot({rootUrl: environment.server_root}),
    CommonsModule,
  ],
  providers: [
    ApiInterceptor,
    API_INTERCEPTOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

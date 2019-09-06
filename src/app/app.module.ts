import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IssuesModule} from './issues/issues.module';
import {AuthModule} from './core/auth/auth.module';
import {ModalModule} from './ui/modal/modal.module';
import {httpInterceptorProviders} from './core/http-interceptors/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IssuesModule,
    AppRoutingModule,
    AuthModule,
    ModalModule

  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
 /*   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));*/
  }
}

import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {LoginComponent} from './core/auth/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: '/issue', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules,
        paramsInheritanceStrategy: 'always'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

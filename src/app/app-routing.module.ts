import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {IssueComponent} from './issue/issue.component';
import {IssueEditComponent} from './issue/issue-edit/issue-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/issue', pathMatch: 'full'},
  {path: 'issue', component: IssueComponent},
 /* {path: 'issue/edit/:siteid/:id', component: IssueEditComponent},*/
  {path: 'edit', component: IssueEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})], exports: [RouterModule]
})
export class AppRoutingModule { }

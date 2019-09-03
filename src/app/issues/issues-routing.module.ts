import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IssuesComponent} from './issues.component';
import {AuthGuard} from '../core/auth/auth-guard.service';


const issuesRoutes: Routes = [
  {path: 'issue', component: IssuesComponent, canActivate: [AuthGuard]},
  {path: 'issue/:site/:id/edit',
    loadChildren: './issue-edit/issue-edit.module#IssueEditModule'}
];
@NgModule({
  imports: [
    RouterModule.forChild(issuesRoutes)
  ],
  exports: [RouterModule]
})
export class IssuesRoutingModule {

}



/* {path: 'issue/edit/:siteid/:id', component: IssueEditComponent},*/
/*{path: 'issue/edit', component: IssueEditComponent}*/


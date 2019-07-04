import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IssueComponent} from './issue.component';
import {IssueEditComponent} from './issue-edit/issue-edit.component';

const issuesRoutes: Routes = [
  {path: 'issue', component: IssueComponent},
  {path: 'issue/:site/:id/edit', component: IssueEditComponent},

];
@NgModule({
  imports: [
    RouterModule.forChild(issuesRoutes)
  ],
  exports: [RouterModule]
})
export class IssueRoutingModule {

}



/* {path: 'issue/edit/:siteid/:id', component: IssueEditComponent},*/
/*{path: 'issue/edit', component: IssueEditComponent}*/


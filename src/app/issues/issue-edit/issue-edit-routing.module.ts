import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainEditComponent} from './main-edit/main-edit.component';
import {IssueEditComponent} from './issue-edit.component';
import {ContractsEditComponent} from './contracts-edit/contracts-edit.component';
import {HistoryEditComponent} from './history-edit/history-edit.component';
import {IsmaEditComponent} from './isma-edit/isma-edit.component';
import {AuthGuard} from '../../core/auth/auth-guard.service';


const routes: Routes = [
  {path: '', component: IssueEditComponent, canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', component: MainEditComponent},
      {path: 'contracts', component: ContractsEditComponent},
      {path: 'history', component: HistoryEditComponent},
      {path: 'isma', component: IsmaEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueEditRoutingModule { }

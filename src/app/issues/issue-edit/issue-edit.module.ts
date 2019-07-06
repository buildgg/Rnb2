import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueEditRoutingModule } from './issue-edit-routing.module';
import {IssueEditComponent} from './issue-edit.component';
import {ContractsEditComponent} from './contracts-edit/contracts-edit.component';
import {MainEditComponent} from './main-edit/main-edit.component';
import {LayoutModule} from '../../ui/layout/layout.module';
import { HistoryEditComponent } from './history-edit/history-edit.component';
import { IsmaEditComponent } from './isma-edit/isma-edit.component';

@NgModule({
  declarations: [IssueEditComponent, ContractsEditComponent, MainEditComponent, HistoryEditComponent, IsmaEditComponent],
  imports: [
    CommonModule,
    IssueEditRoutingModule,
    LayoutModule
  ]
})
export class IssueEditModule { }

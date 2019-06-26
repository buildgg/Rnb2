import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {IssueComponent} from './issue.component';
import {LayoutModule} from '../ui/layout/layout.module';
import {TableModule} from '../ui/table/table.module';
import {OperationModule} from '../ui/operation/operation.module';
import {FilterModule} from '../ui/filter/filter.module';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

@NgModule({
  declarations: [IssueComponent, IssueEditComponent],
  imports: [
    CommonModule,
    LayoutModule,
    TableModule,
    OperationModule,
    FilterModule
  ]
})
export class IssueModule { }

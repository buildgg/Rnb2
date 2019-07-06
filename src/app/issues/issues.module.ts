import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {IssuesComponent} from './issues.component';
import {LayoutModule} from '../ui/layout/layout.module';
import {TableModule} from '../ui/table/table.module';
import {OperationModule} from '../ui/operation/operation.module';
import {FilterModule} from '../ui/filter/filter.module';
import {IssuesRoutingModule} from './issues-routing.module';

@NgModule({
  declarations: [IssuesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    TableModule,
    OperationModule,
    FilterModule,
    RouterModule,
    IssuesRoutingModule
  ]
})
export class IssuesModule { }

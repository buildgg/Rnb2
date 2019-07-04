import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatCheckboxModule, MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule}
from '@angular/material';

import {RnbTableComponent} from './rnb-table/rnb-table.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [RnbTableComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    RouterModule

  ],
  exports: [
    RnbTableComponent
  ]
})
export class TableModule { }

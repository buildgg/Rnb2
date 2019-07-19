import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {GridComponent} from './grid.component';
import {RnbCellDirective} from './rnb-cell.directive';

@NgModule({
  declarations: [
    GridComponent,
    RnbCellDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [GridComponent]
})
export class GridModule { }

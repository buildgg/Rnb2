import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LookUpModule} from '../look-up/look-up.module';
import { FilterListComponent } from './filter-list/filter-list.component';

@NgModule({
  declarations: [FilterComponent, FilterListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxModule,
    LookUpModule
  ],
  exports: [FilterComponent, FilterListComponent]
})
export class FilterModule { }

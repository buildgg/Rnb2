import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OperationComponent} from './operation.component';

@NgModule({
  declarations: [OperationComponent],
  imports: [
    CommonModule
  ],
  exports: [OperationComponent]
})
export class OperationModule { }

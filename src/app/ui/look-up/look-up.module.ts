import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LookUpComponent } from './look-up.component';

@NgModule({
  declarations: [LookUpComponent],
  imports: [
    CommonModule
  ],
  exports: [LookUpComponent]
})
export class LookUpModule { }

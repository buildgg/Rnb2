import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ModalMessageComponent} from './modal-message.component';

@NgModule({
  declarations: [
    ModalMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalMessageComponent
  ]
})
export class ModalMessageModule { }

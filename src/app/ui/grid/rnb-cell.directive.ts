import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[rnb-cell]'
})
export class RnbCellDirective {

  constructor(el: ElementRef) {
    console.log('width = ' + el.nativeElement.style.width);
  }
}


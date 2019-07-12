import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[rnbCell]'
})
export class RnbCellDirective implements OnInit {

  @Input('rnbCell') images: string[];
  ngOnInit(): void {
    console.log('images = ', this.images);
  }

  /*context;

  constructor(private tpl: TemplateRef<any>,
              private vcr: ViewContainerRef) {
    console.log('width = ');
  }

  @Input('rnbCellFrom') images: string[];

  ngOnInit(): void {
    this.context = {
      $implicit: this.images
  };

    this.vcr.createEmbeddedView(this.tpl, this.context);
  }*/

}


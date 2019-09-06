import {ComponentFactory, ComponentFactoryResolver, ComponentRef, ElementRef, Inject, Injectable, Injector} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {SpinnerComponent} from './spinner.component';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private componentRef: ComponentRef<SpinnerComponent>;
  private element;
  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document) { }

   start() {
    const factory: ComponentFactory<SpinnerComponent> =
      this.componentFactory.resolveComponentFactory(SpinnerComponent);
    this.componentRef = factory.create(this.injector);

    this.element =  this.componentRef.location.nativeElement;
    console.log(typeof this.element)
    this.document.body.appendChild(this.element);
   }
  destroy() {
     this.element.remove();

   }

}

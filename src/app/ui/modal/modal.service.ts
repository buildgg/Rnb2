import {ComponentFactory, ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, TemplateRef, Type} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ModalComponent} from './modal.component';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private resolver: ComponentFactoryResolver,
              private injector: Injector,
              @Inject(DOCUMENT) private document: Document) {
  }

  open<T>(content: Content<T>) {
    const factory: ComponentFactory<ModalComponent>
      = this.resolver.resolveComponentFactory(ModalComponent);

    const ngContent = this.resolveNgContent(content);

    const componentRef = factory.create(this.injector, ngContent);
    componentRef.hostView.detectChanges();

    const { nativeElement } = componentRef.location;
    this.document.body.appendChild(nativeElement);

  }

  resolveNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createTextNode(content);
      return [[element]];
    }
    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(null);
      return [viewRef.rootNodes];
    }

    const factory = this.resolver.resolveComponentFactory(content);
    const componentRef = factory.create(this.injector);
    return [[componentRef.location.nativeElement]];
  }
}

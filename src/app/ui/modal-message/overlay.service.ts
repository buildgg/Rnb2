import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor(@Inject(DOCUMENT) private document: any) { }

  createContainerElement() {
    const container = this.document.createElement('div');
    container.classList.add('rnb-overlay-container');
    this.document.body.appendChild(container);
    console.log(container);

  }

}

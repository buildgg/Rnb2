import {AfterContentInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';

@Component({
  selector: 'rnb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterContentInit {

  name;

  @ViewChild('templateName') nameTemplate: TemplateRef<any>;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.nameTemplate.createEmbeddedView({

    });
  }

  close() {
   this.elementRef.nativeElement.remove();
  }
  ngAfterContentInit() {
    const viewRef: ViewRef = this.nameTemplate.createEmbeddedView({
      name: 'White nigga'
    });
    this.container.insert(viewRef);

  }

}

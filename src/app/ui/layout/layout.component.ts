import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'rnb-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [trigger('EnterLeave', [
      transition(':enter', [
        style({opacity: 0.5}), animate('0.5s ease-in')])
    ]
  )]
})
export class LayoutComponent implements AfterContentInit {
  loginUser: string = 'admin';
  @Input() title: string = 'заявки';
  @Input() isVisibleHiddenBox: boolean = false;

  ngAfterContentInit() {
  }

}

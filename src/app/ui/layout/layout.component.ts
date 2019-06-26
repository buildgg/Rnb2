import {AfterContentInit, Component, ContentChild, ElementRef, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
export class LayoutComponent {
  loginUser: string = 'admin';
  title: string = 'заявки';
  @Input() isVisibleHiddenBox: boolean = false;

}

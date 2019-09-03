import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../../core/auth/auth.service';

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
export class LayoutComponent implements OnInit {
  loginUser: string;
  @Input() title: string = 'заявки';
  @Input() isVisibleHiddenBox: boolean = false;

  ngOnInit() {
    this.loginUser = this.authService.currentUser;
  }

  constructor(private authService: AuthService) {}

}

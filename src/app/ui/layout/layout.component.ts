import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
  @Input() title: string = 'заявки';
  @Input() isVisibleHiddenBox: boolean = false;

  loginUser: string;

  constructor(private authService: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(
        (value: string) => this.loginUser = value
      );
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

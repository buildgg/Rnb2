import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'rnb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() loginTime: Date = new Date();
  @Input() loginUser: string = 'Admin';

  constructor(private authSevice: AuthService, private router: Router) {}

  logout() {
    this.authSevice.logout();
    this.router.navigate(['/login']);
  }
}

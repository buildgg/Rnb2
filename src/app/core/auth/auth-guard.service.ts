import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


    console.log('Can Activate?');
    const url = state.url;
    if (this.authService.isAuthorized()) {
      console.log('True');
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    console.log('False');
    return false;
  }
}

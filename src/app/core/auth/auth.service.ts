import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {environment} from '../../../environments/environment';
import {finalize} from 'rxjs/internal/operators';


/*  "username": "in.tsukanov";
    "password": "c67"
    ' http://172.17.34.37:8080/JetB2/api/dictionaries';
    ' http://172.17.34.37:8080/JetB2/api/issues';
    */

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  redirectUrl: string = '/issue';
  private user = new BehaviorSubject('');
  currentUser = this.user.asObservable();


  private apiUrl = environment.apiUrl;
  private urlAuth = {
    login: '/login',
    loggedIn: '/loggedIn',
    logout: '/logout'
  };

  constructor(private http: HttpClient) { }

  isAuthorized(): Observable<boolean> {
    const url = this.apiUrl + '' + this.urlAuth.loggedIn;
    return this.http.get(url, {withCredentials: true})
      .pipe(
        map((value: {data: boolean}) => value.data)
      );
  }

  login(name: string, password: string): Observable<boolean> {
    const formData = new FormData();
    formData.append('username', name);
    formData.append('password', password);

    const url = this.apiUrl + '' + this.urlAuth.login;
    this.user.next(name);

/*    this.http.get('http://172.17.34.37:8080/JetB2/api/issues', {withCredentials: true})
      .pipe(
        map((value) => console.log('issue::: ', value))
      ).subscribe(
      (val) =>  console.log('issue val::: ', val),
      (error) =>  console.log('issue error::: ', error)
    );*/

    return this.http.post(url, formData, {withCredentials: true})
      .pipe(
        map( (value: {success: boolean}) => value.success)
      );


  }

  logout() {
    this.user.next(null);
    const url = this.apiUrl + '' + this.urlAuth.logout;
    console.log('logout() url', url);

    this.http.post(url, null, {withCredentials: true})
      .pipe(
        tap(value => console.log('logout() ', value)),
        finalize(
          () => console.log('logout() finalize DONE')),

      ).subscribe(
        (sub) => {
          console.log('logout() sub', sub);
        }
      );
  }
}


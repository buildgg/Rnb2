import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';
import {ModalMessageComponent} from '../../ui/modal-message/modal-message.component';

/*  "username": "in.tsukanov";
    "password": "c67"*/

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  redirectUrl: string = '/issue';
  currentUser: string = null;
  authorized = false;


  private url: string = 'http://172.17.34.37:8080/JetB2/api/login';
  private url1: string = ' http://172.17.34.37:8080/JetB2/api/dictionaries';
  private url2: string = ' http://172.17.34.37:8080/JetB2/api/issues';



  constructor(private http: HttpClient) { }

  isAuthorized(): boolean {
    return this.authorized;
  }

  login(name: string, password: string): Observable<boolean> {

    const formData = new FormData();
    formData.append('username', name);
    formData.append('password', password);


    return this.http.post(this.url, formData, {withCredentials: true})
      .pipe(
        map( (value: {sucess: boolean}) => value.sucess),
        tap(value => console.log('value ', value))
      );
  }

  logout(): void {
    this.authorized = false;
    this.currentUser = null;
  }

 /* get() {
    setTimeout(
      () => {
        this.http.get(this.url2, {withCredentials: true})
          .subscribe(
            (val) => console.log('val2 = ', val),
            (error) => console.log('error2 = ', error)
          );
      },
      2000
    );
  }*/
}


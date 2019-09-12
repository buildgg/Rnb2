import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {SpinnerService} from '../../ui/spinner/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('assets')) {
      this.spinnerService.start();
    }
    return next.handle(req).
      pipe(
        tap(
          (event) => {
           /* console.log('Interceptor *** ', event);*/
          }
        ),
      finalize(
        () => {
          console.log('finalize *** ', req.url);
          this.spinnerService.destroy();
        }
      )
    );
  }

}

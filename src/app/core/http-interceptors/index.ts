import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {SpinnerInterceptorService} from './spinner-interceptor.service';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true}
];

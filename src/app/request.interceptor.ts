import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Request Interceptor', request);

    if(request.method == 'POST')
    {
      const cloneRequest = request.clone({
        headers: new HttpHeaders({token:'CloneRequestToken'})
      });
      return next.handle(cloneRequest);
    }
    
    return next.handle(request);
  }
}

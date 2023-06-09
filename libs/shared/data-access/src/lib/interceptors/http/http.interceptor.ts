import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { UserState } from '../../state';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const userState = inject(UserState);
    return userState.getUserDetails().pipe(
      switchMap((user) => {
        let headers = new HttpHeaders();
        if (!user.token) {
          const token = localStorage.getItem('token');
          if (token) {
            userState.setUserDetails({ token });
          }
        }
        if (user.token) {
          headers = headers.append('AUTHORIZATION', `Bearer ${user.token}`);
        }
        return next.handle(request.clone({ headers }));
      })
    );
  }
}

import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent
} from '@angular/common/http';
import {AuthService} from './login/auth.service';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, finalize, switchMap, take} from 'rxjs/operators';
import {TokenRefreshResponse} from './dto/token-refresh-response';
import {Globals} from './globals';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  private pathRefresh = '/auth/refresh';

  constructor(private loginService: AuthService, private globals: Globals) {
  }

  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {

    request = request.clone({setHeaders: {Authorization: this.getTokenHeader()}});

    return next.handle(request)
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch ((err as HttpErrorResponse).status) {
              case 401:
                return this.handle401Error(err, request, next);
              case 403:
                return this.handle401Error(err, request, next);
              default:
                if (request.url.indexOf(this.pathRefresh) === -1) {
                  // this.notifier.notify('error', err.error.message);
                }
                return throwError(err);
            }
          } else {
            return throwError(err);
          }
        }));
  }

  private handle401Error(requestErr: HttpErrorResponse, request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.indexOf(this.pathRefresh) !== -1) {
      return throwError(requestErr);
    }

    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      this.tokenSubject.next(null);

      return this.loginService.refresh()
        .pipe(
          switchMap((response: TokenRefreshResponse) => {
            if (response.accessToken) {
              localStorage.setItem(this.globals.localStorageTokenName, response.accessToken);
              this.tokenSubject.next(response.accessToken);
              return next.handle(request.clone({setHeaders: {Authorization: this.getTokenHeader()}}));
            }
          }),

          catchError(err => {
            console.log(err);
            localStorage.removeItem(this.globals.localStorageTokenName);
            localStorage.removeItem(this.globals.localStorageUser);
            return throwError(err);
          }),

          finalize(() => {
            this.isRefreshingToken = false;
          })
        );
    } else {
      this.isRefreshingToken = false;

      return this.tokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
            return next.handle(request);
          }));
    }
  }

  private getTokenHeader() {
    return 'Bearer ' + localStorage.getItem(this.globals.localStorageTokenName);
  }

}

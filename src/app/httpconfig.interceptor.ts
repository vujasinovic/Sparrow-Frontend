import {Injectable} from '@angular/core';
import {
  HttpErrorResponse, HttpEvent,
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
import {catchError, filter, finalize, map, switchMap, take} from 'rxjs/operators';
import {ApiResponse} from './dto/api-response';
import {Router} from '@angular/router';
import {TokenRefreshResponse} from './dto/token-refresh-response';
import {Globals} from './globals';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  private pathLogin = '/login';
  private pathApi = '/api/';
  private pathRefresh = '/auth/refresh';

  constructor(private loginService: AuthService, private router: Router, private globals: Globals) {
  }

  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {

    request = request.clone({setHeaders: {Authorization: this.getTokenHeader()}});

    return next.handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
            return this.convert(request, event);
          }
        ),
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

  private convert(request: HttpRequest<any>, event: HttpEvent<any>): HttpEvent<any> {
    if (!(event instanceof HttpResponse)) {
      return event;
    } else {
      if (request.url.indexOf(this.pathApi) === -1) {
        return event;
      }

      const response: ApiResponse = event.body;
      if (!response) {
        return event;
      }

      if (response.message) {
        // this.notifier.notify('success', response.message);
      }

      return event.clone({body: response.body});
    }
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
              return next.handle(request).pipe(
                map((event: HttpEvent<any>) => {
                  return this.convert(request, event);
                })
              );
            }
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

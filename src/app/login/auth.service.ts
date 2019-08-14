import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Observable, Subscriber, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Globals} from '../globals';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
  }
)
export class AuthService {

  constructor(private http: HttpClient, private globals: Globals) {
    this.loginUrl = this.globals.apiRoot + 'auth';
    this.meUrl = this.globals.apiRoot + 'api/user/me';
    this.refreshUrl = this.globals.apiRoot + 'auth/refresh';
    this.logoutUrl = this.globals.apiRoot + 'auth/logout';

    this.jwtHelper = new JwtHelperService();

    if (!AuthService.initialized) {
      AuthService.initialized = true;
      this.reloadLoggedUser();
    }
  }

  static initialized = false;

  private loginUrl = null;
  private meUrl = null;
  private refreshUrl = null;
  private logoutUrl = null;

  private subscribers: Subscriber<User>[] = [];

  private jwtHelper: JwtHelperService;

  public login(user: User) {
    return this.http.post<{accessToken}>(this.loginUrl, user).pipe(
      map(value => {
        localStorage.setItem(this.globals.localStorageTokenName, value.accessToken);
      })
    );
  }

  public refresh() {
    return this.http.get(this.refreshUrl);
  }

  public logout() {
    return this.http.get(this.logoutUrl).subscribe(value => {
      localStorage.removeItem(this.globals.localStorageTokenName);
      this.reloadLoggedUser();
      window.location.href = '/login';
    });
  }

  public getLoggedUserObservable(): Observable<User> {
    return new Observable<User>(subscriber => {
      this.subscribers.push(subscriber);

      if (this.getLoggedUser()) {
        subscriber.next(this.getLoggedUser());
      } else {
        this.reloadLoggedUser();
      }
    });
  }

  public reloadLoggedUser(): void {
    this.http.get<User>(this.meUrl).pipe(
      catchError(err => {
        this.setLoggedUser(null);
        return throwError(err);
      })).subscribe(value => {
        this.setLoggedUser(value);
      }
    );
  }

  public setLoggedUser(user: User): void {
    if (user) {
      localStorage.setItem(this.globals.localStorageUser, JSON.stringify(user));
    } else {
      localStorage.removeItem(this.globals.localStorageUser);
    }
    this.notifySubscribers();
  }

  public getLoggedUser(): User {
    const token = localStorage.getItem(this.globals.localStorageTokenName);
    if (!token || this.jwtHelper.isTokenExpired(token)) {
      return null;
    }
    const userJson = localStorage.getItem(this.globals.localStorageUser);
    if (userJson) {
      return JSON.parse(localStorage.getItem(this.globals.localStorageUser));
    } else {
      return null;
    }
  }

  private notifySubscribers(): void {
    this.subscribers.forEach(subscriber => {
      subscriber.next(this.getLoggedUser());
    });
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {User} from '../user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userApi;

  constructor(private http: HttpClient, private globals: Globals, private authService: AuthService) {
    this.userApi = globals.apiRoot + 'api/user';
  }

  public update(user: User): Observable<User> {
    return this.http.put<User>(this.userApi, {
      username: user.username,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      password: user.password
    }).pipe(map(value => {
      this.authService.reloadLoggedUser();
      return value;
    }));
  }

}

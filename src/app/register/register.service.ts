import {Injectable} from '@angular/core';
import {User} from '../user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';

@Injectable({providedIn: 'root'})
export class RegisterService {

  private readonly registerUrl;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.registerUrl = globals.apiRoot + 'api/user';
  }

  public register(user: User): Observable<User> {
    return this.httpClient.post<User>(this.registerUrl, user);
  }

}

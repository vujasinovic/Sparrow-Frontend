import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Globals} from '../globals';
import {Observable} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  readonly searchApi;
  readonly userApi;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.userApi = globals.apiRoot + 'api/user/';
    this.searchApi = this.userApi + 'search/';
  }

  getAllByRole(role: string): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userApi, {
      params: {
        role
      }
    });
  }

  search(keyword: string) {
    this.httpClient.get(this.searchApi + keyword);
  }

  searchAdvanced(keyword: string, isFriend = false, canAddFriend = false): Observable<User[]> {
    return this.httpClient.get<User[]>(this.searchApi + keyword, {
      params: new HttpParams({
        fromObject: {
          isFriend: String(isFriend),
          canAddFriend: String(canAddFriend),
        }
      })
    });
  }

}

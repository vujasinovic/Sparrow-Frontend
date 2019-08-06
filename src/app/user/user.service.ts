import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Globals} from '../globals';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly searchApi;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.searchApi = globals.apiRoot = '/api/user/search/';
  }

  search(keyword: string) {
    this.httpClient.get(this.searchApi + keyword);
  }

  searchAdvanced(keyword: string, isFriend = false, canAddFriend = false) {
    this.httpClient.get(this.searchApi + keyword, {
      params: new HttpParams({
        fromObject: {
          isFriend: String(isFriend),
          canAddFriend: String(canAddFriend),
        }
      })
    });
  }

}

import {Injectable} from '@angular/core';
import {User} from '../user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {FriendRequest} from '../dto/friend-request';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  readonly friendsApi;
  readonly userApi;
  readonly requestApi;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.friendsApi = globals.apiRoot + 'api/user/friends/';
    this.userApi = this.friendsApi + 'user/';
    this.requestApi = this.friendsApi + 'request/';
  }

  public getFriends(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.friendsApi);
  }

  public removeFriend(email: string): Observable<any> {
    return this.httpClient.delete(this.friendsApi + email);
  }

  public acceptRequest(sender: string): Observable<any> {
    return this.httpClient.post(this.requestApi + sender + '/accept', {});
  }

  public declineRequest(sender: string): Observable<any> {
    return this.httpClient.post(this.requestApi + sender + '/decline', {});
  }

  public getRequests(): Observable<FriendRequest[]> {
    return this.httpClient.get<FriendRequest[]>(this.requestApi);
  }

  public sendRequest(username: string): Observable<any> {
    return this.httpClient.put(this.requestApi + username, {});
  }

}

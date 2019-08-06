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
  readonly requestsApi;

  constructor(private httpClient: HttpClient, private globals: Globals) {
    this.friendsApi = globals.apiRoot + 'api/user/friends/';
    this.requestsApi = this.friendsApi + 'request/';
  }

  public getFriends(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.friendsApi);
  }

  public removeFriend(email: string): Observable<any> {
    return this.httpClient.delete(this.friendsApi + email);
  }

  public acceptRequest(senderEmail: string): Observable<any> {
    return this.httpClient.post(this.requestsApi + senderEmail + '/accept', {});
  }

  public declineRequest(senderEmail: string): Observable<any> {
    return this.httpClient.post(this.requestsApi + senderEmail + '/decline', {});
  }

  public getRequests(): Observable<FriendRequest[]> {
    return this.httpClient.get<FriendRequest[]>(this.requestsApi);
  }

}

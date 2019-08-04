import {Component} from '@angular/core';
import {FriendsService} from './friends.service';
import {FriendRequest} from '../dto/friend-request';

@Component({
  selector: 'app-friendships',
  templateUrl: './friend-request.component.html'
})
export class FriendRequestComponent {
  requests: FriendRequest[] = [];

  constructor(private friendsService: FriendsService) {
    friendsService.getRequests().subscribe(value => this.requests = value);
  }

}

import {Component, OnInit} from '@angular/core';
import {FriendsService} from './friends.service';
import {FriendRequest} from '../dto/friend-request';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-friendships',
  templateUrl: './friend-request.component.html'
})
export class FriendRequestComponent implements OnInit {
  requests: FriendRequest[] = [];

  constructor(private friendsService: FriendsService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.friendsService.getRequests().subscribe(value => this.requests = value);
  }

  accept(request: FriendRequest) {
    this.friendsService.acceptRequest(request.sender.username).subscribe(value => {
      this.authService.getLoggedUser().friendRequests--;
      this.loadRequests();
    });
  }

  decline(request: FriendRequest) {
    this.friendsService.declineRequest(request.sender.username).subscribe(value => {
      this.authService.getLoggedUser().friendRequests--;
      this.loadRequests();
    });
  }

}

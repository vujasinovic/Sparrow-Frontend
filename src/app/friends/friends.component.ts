import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FriendsService} from './friends.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from '../dialog/confirm-dialog.component';
import {FriendRequest} from '../dto/friend-request';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html'
})
export class FriendsComponent implements OnInit {
  friends: User[] = [];
  requests: FriendRequest[] = [];

  constructor(private friendsService: FriendsService, private modalService: NgbModal, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loadFriends();
    this.loadRequests();
  }

  loadFriends() {
    this.friendsService.getFriends().subscribe(friends => {
      this.friends = friends;
    });
  }

  unfriend(friend: User) {
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.text = 'Are you sure you want to remove '
      + friend.firstName + ' ' + friend.lastName + ' from your friend list';
    modalRef.componentInstance.title = 'Confirm';

    modalRef.result.then(value => {
      if (value) {
        this.friendsService.removeFriend(friend.username).subscribe(value1 => {
          this.loadFriends();
        });
      }
    });
  }

  loadRequests() {
    this.friendsService.getRequests().subscribe(value => this.requests = value);
  }

  accept(request: FriendRequest) {
    this.friendsService.acceptRequest(request.sender.username).subscribe(value => {
      this.authService.getLoggedUser().friendRequests--;
      this.loadRequests();
      this.loadFriends();
    });
  }

  decline(request: FriendRequest) {
    this.friendsService.declineRequest(request.sender.username).subscribe(value => {
      this.authService.getLoggedUser().friendRequests--;
      this.loadRequests();
    });
  }

}

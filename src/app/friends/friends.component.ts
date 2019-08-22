import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FriendsService} from './friends.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogComponent} from '../dialog/confirm-dialog.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html'
})
export class FriendsComponent implements OnInit {
  friends: User[] = [];
  closeResult: string;

  constructor(private friendsService: FriendsService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadFriends();
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

}

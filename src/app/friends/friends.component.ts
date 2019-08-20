import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {FriendsService} from './friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html'
})
export class FriendsComponent implements OnInit {
  friends: User[] = [];

  constructor(private friendsService: FriendsService) {

  }

  ngOnInit(): void {
    this.friendsService.getFriends().subscribe(friends => {
      this.friends = friends;
    });
  }

}

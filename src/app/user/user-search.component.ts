import {Component} from '@angular/core';
import {UserSearchService} from './user-search.service';
import {User} from '../user';
import {FriendsService} from '../friends/friends.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-search.component.html'
})
export class UserSearchComponent {
  query: string;
  users: User[];

  constructor(private userSearchService: UserSearchService, private friendshipService: FriendsService) {
  }

  search() {
    if (this.query) {
      this.userSearchService.searchAdvanced(this.query, false, true).subscribe(result => this.users = result);
    }
  }


  sendRequest(username: string) {
    this.friendshipService.sendRequest(username).subscribe(value => {
      this.search();
    });
  }
}

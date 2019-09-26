import {Component, OnInit} from "@angular/core";
import {AuthService} from '../login/auth.service';
import {User} from '../user';
import {Observable} from 'rxjs';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  public user: Observable<User>;
  public user1 : User;

  constructor(public authService: AuthService) {
    this.user = authService.getLoggedUserObservable();
    this.user1 = authService.getLoggedUser();
  }

  ngOnInit(): void {
  }

}

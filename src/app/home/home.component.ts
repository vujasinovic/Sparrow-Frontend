import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../globals';
import {AuthService} from '../login/auth.service';
import {Observable} from 'rxjs';
import {User} from '../user';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private user: Observable<User>;

  constructor(private client: HttpClient, private globals: Globals, private authService: AuthService) {
    this.user = authService.getLoggedUserObservable();
  }

  ngOnInit(): void {
  }

  test() {
    this.client.get(this.globals.apiRoot + 'api/user/me').subscribe(value => console.log(value));
  }

}

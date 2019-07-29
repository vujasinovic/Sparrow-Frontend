import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private loginService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
    this.route.params.subscribe(params => this.user.username = params.username);
  }

  ngOnInit(): void {

  }

  login() {
    this.loginService.login(this.user).subscribe(() => {
      this.loginService.reloadLoggedUser();
      this.router.navigate(['/']);
    });
  }
}

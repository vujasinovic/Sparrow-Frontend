import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  user: User;
  error: string;

  constructor(private loginService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.user = new User();
    this.route.params.subscribe(params => this.user.username = params.username);
  }

  ngOnInit(): void {
  }

  login() {
    this.error = null;
    this.loginService.login(this.user).pipe(
      catchError(err => {
        this.error = err.error.message;
        return throwError(err);
      })
    ).subscribe(() => {
      this.loginService.reloadLoggedUser();
      this.router.navigate(['/']);
    });
  }
}

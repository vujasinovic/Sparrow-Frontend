import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  private activate = false;

  constructor(public loginService: AuthService, public router: Router) {
    this.loginService.getLoggedUserObservable().subscribe(value => {
      if (value) {
        this.activate = true;
      } else {
        this.activate = false;
        router.navigate(['login']);
      }
    });
  }

  canActivate(): boolean {
    return this.activate;
  }

}

import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthenticatedGuardService implements CanActivate {
  constructor(public loginService: AuthService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.loginService.getLoggedUser()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}

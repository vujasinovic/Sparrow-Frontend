import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class LoginGuardService implements CanActivate {

  constructor(private loginService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.loginService.getLoggedUser()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }

}

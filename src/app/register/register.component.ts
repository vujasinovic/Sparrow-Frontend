import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {RegisterService} from './register.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  userData: FormGroup;
  passwordRepeat: string;
  error: string;

  constructor(private registerService: RegisterService, private formBuilder: FormBuilder, private router: Router) {
  }

  public register() {
    this.error = null;
    this.registerService.register(this.user).pipe(
      catchError(err => {
        this.error = err.error.message;
        console.log(err);
        return throwError(err);
      })
    ).subscribe(newUser => {
      this.router.navigate(['login/', newUser.username]);
    });
  }

  ngOnInit(): void {
    this.userData = this.formBuilder.group({
        username: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        passwordRepeat: ['', [Validators.required]],
      },
      {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    if (!group.controls.password.touched) {
      return null;
    }
    const pass = group.controls.password.value;
    const confirmPass = group.controls.passwordRepeat.value;
    return pass === confirmPass ? null : {notSame: true};
  }

  get f() {
    return this.userData.controls;
  }

}

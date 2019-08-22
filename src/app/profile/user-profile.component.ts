import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/auth.service';
import {User} from '../user';
import {UserService} from '../user/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ChangePasswordDialogComponent} from '../dialog/change-password-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: 'user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  user: User;
  edit = false;
  memento = null;

  constructor(private authService: AuthService, private userService: UserService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.authService.getLoggedUserObservable().subscribe(value => this.user = value);
  }

  doEdit() {
    this.memento = Object.assign({}, this.user);
    this.edit = true;
  }

  cancel() {
    this.user = this.memento;
    this.edit = false;
  }

  save() {
    this.userService.update(this.user).subscribe(value => {
      this.user = value;
      this.edit = false;
    });
  }

  changePassword() {
    const modalRef = this.modalService.open(ChangePasswordDialogComponent);
    modalRef.result.then(value => {
      if (value) {
        this.user.password = value;
        this.userService.update(this.user).subscribe();
      }
    });

  }
}

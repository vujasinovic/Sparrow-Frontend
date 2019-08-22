import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Change Password</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss(null)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="form-group row">
        <label for="password" class="col-sm-2 col-form-label">Password:</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="password" [(ngModel)]="password">
          <small *ngIf="!password" id="repeatMsg" class="form-text text-danger">This field is requiered.</small>
        </div>
      </div>

      <div class="form-group row">
        <label for="repeat" class="col-sm-2 col-form-label">Repeat:</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="repeat" [(ngModel)]="repeat">
          <small *ngIf="!repeat" id="repeatMsg" class="form-text text-danger">This field is requiered.</small>
          <small *ngIf="repeat && password !== repeat" id="repeatMsg" class="form-text text-danger">Passwords do not match.</small>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button [disabled]="!password || !repeat || password !== repeat" type="button" class="btn btn-success"
              (click)="activeModal.close(password)">Change
      </button>
      <button type="button" class="btn btn-danger" (click)="activeModal.close(null)">Cancel</button>
    </div>
  `
})
export class ChangePasswordDialogComponent {
  password: string;
  repeat: string;

  constructor(public activeModal: NgbActiveModal) {
  }

}

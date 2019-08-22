import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{title}}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{text}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-success" (click)="activeModal.close(true)">Yes</button>
      <button type="button" class="btn btn-danger" (click)="activeModal.close(false)">No</button>
    </div>
  `
})
export class ConfirmDialogComponent {
  @Input() title;
  @Input() text;

  constructor(public activeModal: NgbActiveModal) {
  }

}

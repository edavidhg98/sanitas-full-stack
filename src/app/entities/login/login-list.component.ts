import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginService } from './login.service';
import { Login } from './login.model';
import { absolutePath } from './login.route';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html'
})
export class LoginListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() logins: Login[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private loginService: LoginService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.loginService.delete(id).subscribe(response => {
          this.logins = this.logins.filter(login => login._id !== id);
        });
      }
    }, (reason) => {});
  }
}

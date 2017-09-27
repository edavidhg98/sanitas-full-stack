import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginSucursalService } from './login-sucursal.service';
import { LoginSucursal } from './login-sucursal.model';
import { absolutePath } from './login-sucursal.route';

@Component({
  selector: 'app-login-sucursal-list',
  templateUrl: './login-sucursal-list.component.html'
})
export class LoginSucursalListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() loginSucursals: LoginSucursal[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private loginSucursalService: LoginSucursalService,
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
        this.loginSucursalService.delete(id).subscribe(response => {
          this.loginSucursals = this.loginSucursals.filter(loginSucursal => loginSucursal._id !== id);
        });
      }
    }, (reason) => {});
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { LoginSucursalService } from './login-sucursal.service';
import { LoginSucursal } from './login-sucursal.model';

@Component({
  selector: 'app-login-sucursal',
  template: `
              <div class="container-fluid">
                <app-login-sucursal-list [loginSucursals]="loginSucursals"></app-login-sucursal-list>
              </div>
            `
})
export class LoginSucursalComponent implements OnInit {

  loginSucursals: LoginSucursal[] = [];

  constructor(private loginSucursalService: LoginSucursalService) {

  }

  ngOnInit() {
    this.loginSucursalService.getAll().subscribe(loginSucursals => this.loginSucursals = loginSucursals);
  }
}

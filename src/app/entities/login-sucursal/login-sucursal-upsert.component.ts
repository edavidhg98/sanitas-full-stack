import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginSucursalService } from './login-sucursal.service';
import { LoginSucursal } from './login-sucursal.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { LoginService } from '../login/login.service';
import { Login } from '../login/login.model';

@Component({
  selector: 'app-login-sucursal-upsert',
  templateUrl: './login-sucursal-upsert.component.html'
})
export class LoginSucursalUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  loginSucursal: LoginSucursal;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  logins: Login[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginSucursalService: LoginSucursalService,
    private sucursalService: SucursalService,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.loginService.getAll().subscribe(logins => this.logins = logins);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.loginSucursalService.getById(id).subscribe(loginSucursal => this.loginSucursal = loginSucursal);
      }
    });
  }

  save(formValues) {
    this.loginSucursal = formValues;
    this.loginSucursalService.insert(this.loginSucursal).subscribe(
      (response) => {
        this.router.navigate(['/entities/login-sucursal']);
      }
    );
  }

  update() {
    this.loginSucursalService.update(this.loginSucursal._id, this.loginSucursal).subscribe(
      (response) => {
        this.router.navigate(['/entities/login-sucursal']);
      }
    );
  }
}

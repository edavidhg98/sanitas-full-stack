import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './login.service';
import { Login } from './login.model';

import { CiudadService } from '../ciudad/ciudad.service';
import { Ciudad } from '../ciudad/ciudad.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-login-upsert',
  templateUrl: './login-upsert.component.html'
})
export class LoginUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  login: Login;

  /** Many-To-One Relationships */
  ciudads: Ciudad[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private ciudadService: CiudadService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.ciudadService.getAll().subscribe(ciudads => this.ciudads = ciudads);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.loginService.getById(id).subscribe(login => this.login = login);
      }
    });
  }

  save(formValues) {
    this.login = formValues;
    this.loginService.insert(this.login).subscribe(
      (response) => {
        this.router.navigate(['/entities/login']);
      }
    );
  }

  update() {
    this.loginService.update(this.login._id, this.login).subscribe(
      (response) => {
        this.router.navigate(['/entities/login']);
      }
    );
  }
}

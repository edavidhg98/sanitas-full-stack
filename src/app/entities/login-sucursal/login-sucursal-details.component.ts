import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LoginSucursal } from './login-sucursal.model';
import { LoginSucursalService } from './login-sucursal.service';

@Component({
  selector: 'app-login-sucursal-details',
  templateUrl: './login-sucursal-details.component.html'
})
export class LoginSucursalDetailsComponent implements OnInit {

  loginSucursal: LoginSucursal;

    constructor(
      private loginSucursalService: LoginSucursalService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.loginSucursalService.getById(id).subscribe(loginSucursal => this.loginSucursal = loginSucursal);
      });
    }
  }

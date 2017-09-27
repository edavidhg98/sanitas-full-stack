import { Routes } from '@angular/router';

import { LoginSucursalComponent } from './login-sucursal.component';
import { LoginSucursalUpSertComponent } from './login-sucursal-upsert.component';
import { LoginSucursalDetailsComponent } from './login-sucursal-details.component';

export const loginSucursalRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginSucursalComponent },
      { path: 'create', component: LoginSucursalUpSertComponent },
      { path: ':id', component: LoginSucursalDetailsComponent },
      { path: ':id/update', component: LoginSucursalUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/login-sucursal/';

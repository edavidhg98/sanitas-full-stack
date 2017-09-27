import { Routes } from '@angular/router';

import { SucursalEntidadComponent } from './sucursal-entidad.component';
import { SucursalEntidadUpSertComponent } from './sucursal-entidad-upsert.component';
import { SucursalEntidadDetailsComponent } from './sucursal-entidad-details.component';

export const sucursalEntidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SucursalEntidadComponent },
      { path: 'create', component: SucursalEntidadUpSertComponent },
      { path: ':id', component: SucursalEntidadDetailsComponent },
      { path: ':id/update', component: SucursalEntidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/sucursal-entidad/';

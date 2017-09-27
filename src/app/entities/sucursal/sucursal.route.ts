import { Routes } from '@angular/router';

import { SucursalComponent } from './sucursal.component';
import { SucursalUpSertComponent } from './sucursal-upsert.component';
import { SucursalDetailsComponent } from './sucursal-details.component';

export const sucursalRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SucursalComponent },
      { path: 'create', component: SucursalUpSertComponent },
      { path: ':id', component: SucursalDetailsComponent },
      { path: ':id/update', component: SucursalUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/sucursal/';

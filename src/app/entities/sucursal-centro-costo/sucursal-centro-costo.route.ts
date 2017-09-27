import { Routes } from '@angular/router';

import { SucursalCentroCostoComponent } from './sucursal-centro-costo.component';
import { SucursalCentroCostoUpSertComponent } from './sucursal-centro-costo-upsert.component';
import { SucursalCentroCostoDetailsComponent } from './sucursal-centro-costo-details.component';

export const sucursalCentroCostoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SucursalCentroCostoComponent },
      { path: 'create', component: SucursalCentroCostoUpSertComponent },
      { path: ':id', component: SucursalCentroCostoDetailsComponent },
      { path: ':id/update', component: SucursalCentroCostoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/sucursal-centro-costo/';

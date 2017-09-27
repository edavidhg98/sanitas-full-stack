import { Routes } from '@angular/router';

import { DetalleCargosPendientesComponent } from './detalle-cargos-pendientes.component';
import { DetalleCargosPendientesUpSertComponent } from './detalle-cargos-pendientes-upsert.component';
import { DetalleCargosPendientesDetailsComponent } from './detalle-cargos-pendientes-details.component';

export const detalleCargosPendientesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DetalleCargosPendientesComponent },
      { path: 'create', component: DetalleCargosPendientesUpSertComponent },
      { path: ':id', component: DetalleCargosPendientesDetailsComponent },
      { path: ':id/update', component: DetalleCargosPendientesUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/detalle-cargos-pendientes/';

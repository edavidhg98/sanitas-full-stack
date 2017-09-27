import { Routes } from '@angular/router';

import { CargosPendientesComponent } from './cargos-pendientes.component';
import { CargosPendientesUpSertComponent } from './cargos-pendientes-upsert.component';
import { CargosPendientesDetailsComponent } from './cargos-pendientes-details.component';

export const cargosPendientesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CargosPendientesComponent },
      { path: 'create', component: CargosPendientesUpSertComponent },
      { path: ':id', component: CargosPendientesDetailsComponent },
      { path: ':id/update', component: CargosPendientesUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/cargos-pendientes/';

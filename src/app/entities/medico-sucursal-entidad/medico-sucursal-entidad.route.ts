import { Routes } from '@angular/router';

import { MedicoSucursalEntidadComponent } from './medico-sucursal-entidad.component';
import { MedicoSucursalEntidadUpSertComponent } from './medico-sucursal-entidad-upsert.component';
import { MedicoSucursalEntidadDetailsComponent } from './medico-sucursal-entidad-details.component';

export const medicoSucursalEntidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MedicoSucursalEntidadComponent },
      { path: 'create', component: MedicoSucursalEntidadUpSertComponent },
      { path: ':id', component: MedicoSucursalEntidadDetailsComponent },
      { path: ':id/update', component: MedicoSucursalEntidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/medico-sucursal-entidad/';

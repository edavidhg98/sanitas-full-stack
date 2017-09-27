import { Routes } from '@angular/router';

import { ProcedimientoEntidadComponent } from './procedimiento-entidad.component';
import { ProcedimientoEntidadUpSertComponent } from './procedimiento-entidad-upsert.component';
import { ProcedimientoEntidadDetailsComponent } from './procedimiento-entidad-details.component';

export const procedimientoEntidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientoEntidadComponent },
      { path: 'create', component: ProcedimientoEntidadUpSertComponent },
      { path: ':id', component: ProcedimientoEntidadDetailsComponent },
      { path: ':id/update', component: ProcedimientoEntidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimiento-entidad/';

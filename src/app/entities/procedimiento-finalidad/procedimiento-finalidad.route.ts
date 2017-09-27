import { Routes } from '@angular/router';

import { ProcedimientoFinalidadComponent } from './procedimiento-finalidad.component';
import { ProcedimientoFinalidadUpSertComponent } from './procedimiento-finalidad-upsert.component';
import { ProcedimientoFinalidadDetailsComponent } from './procedimiento-finalidad-details.component';

export const procedimientoFinalidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientoFinalidadComponent },
      { path: 'create', component: ProcedimientoFinalidadUpSertComponent },
      { path: ':id', component: ProcedimientoFinalidadDetailsComponent },
      { path: ':id/update', component: ProcedimientoFinalidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimiento-finalidad/';

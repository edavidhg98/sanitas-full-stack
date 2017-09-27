import { Routes } from '@angular/router';

import { ProcedimientoComponent } from './procedimiento.component';
import { ProcedimientoUpSertComponent } from './procedimiento-upsert.component';
import { ProcedimientoDetailsComponent } from './procedimiento-details.component';

export const procedimientoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientoComponent },
      { path: 'create', component: ProcedimientoUpSertComponent },
      { path: ':id', component: ProcedimientoDetailsComponent },
      { path: ':id/update', component: ProcedimientoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimiento/';

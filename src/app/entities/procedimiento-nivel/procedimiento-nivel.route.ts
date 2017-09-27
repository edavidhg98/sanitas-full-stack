import { Routes } from '@angular/router';

import { ProcedimientoNivelComponent } from './procedimiento-nivel.component';
import { ProcedimientoNivelUpSertComponent } from './procedimiento-nivel-upsert.component';
import { ProcedimientoNivelDetailsComponent } from './procedimiento-nivel-details.component';

export const procedimientoNivelRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientoNivelComponent },
      { path: 'create', component: ProcedimientoNivelUpSertComponent },
      { path: ':id', component: ProcedimientoNivelDetailsComponent },
      { path: ':id/update', component: ProcedimientoNivelUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimiento-nivel/';

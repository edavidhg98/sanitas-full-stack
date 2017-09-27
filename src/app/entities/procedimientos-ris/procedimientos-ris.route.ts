import { Routes } from '@angular/router';

import { ProcedimientosRisComponent } from './procedimientos-ris.component';
import { ProcedimientosRisUpSertComponent } from './procedimientos-ris-upsert.component';
import { ProcedimientosRisDetailsComponent } from './procedimientos-ris-details.component';

export const procedimientosRisRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientosRisComponent },
      { path: 'create', component: ProcedimientosRisUpSertComponent },
      { path: ':id', component: ProcedimientosRisDetailsComponent },
      { path: ':id/update', component: ProcedimientosRisUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimientos-ris/';

import { Routes } from '@angular/router';

import { ProcedimientoCentroCostoComponent } from './procedimiento-centro-costo.component';
import { ProcedimientoCentroCostoUpSertComponent } from './procedimiento-centro-costo-upsert.component';
import { ProcedimientoCentroCostoDetailsComponent } from './procedimiento-centro-costo-details.component';

export const procedimientoCentroCostoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientoCentroCostoComponent },
      { path: 'create', component: ProcedimientoCentroCostoUpSertComponent },
      { path: ':id', component: ProcedimientoCentroCostoDetailsComponent },
      { path: ':id/update', component: ProcedimientoCentroCostoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimiento-centro-costo/';

import { Routes } from '@angular/router';

import { MedicoGrupoProcedimientoComponent } from './medico-grupo-procedimiento.component';
import { MedicoGrupoProcedimientoUpSertComponent } from './medico-grupo-procedimiento-upsert.component';
import { MedicoGrupoProcedimientoDetailsComponent } from './medico-grupo-procedimiento-details.component';

export const medicoGrupoProcedimientoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MedicoGrupoProcedimientoComponent },
      { path: 'create', component: MedicoGrupoProcedimientoUpSertComponent },
      { path: ':id', component: MedicoGrupoProcedimientoDetailsComponent },
      { path: ':id/update', component: MedicoGrupoProcedimientoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/medico-grupo-procedimiento/';

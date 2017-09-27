import { Routes } from '@angular/router';

import { PypProcedimientoProgramaComponent } from './pyp-procedimiento-programa.component';
import { PypProcedimientoProgramaUpSertComponent } from './pyp-procedimiento-programa-upsert.component';
import { PypProcedimientoProgramaDetailsComponent } from './pyp-procedimiento-programa-details.component';

export const pypProcedimientoProgramaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PypProcedimientoProgramaComponent },
      { path: 'create', component: PypProcedimientoProgramaUpSertComponent },
      { path: ':id', component: PypProcedimientoProgramaDetailsComponent },
      { path: ':id/update', component: PypProcedimientoProgramaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/pyp-procedimiento-programa/';

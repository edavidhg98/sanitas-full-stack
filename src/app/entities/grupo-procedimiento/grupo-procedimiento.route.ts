import { Routes } from '@angular/router';

import { GrupoProcedimientoComponent } from './grupo-procedimiento.component';
import { GrupoProcedimientoUpSertComponent } from './grupo-procedimiento-upsert.component';
import { GrupoProcedimientoDetailsComponent } from './grupo-procedimiento-details.component';

export const grupoProcedimientoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: GrupoProcedimientoComponent },
      { path: 'create', component: GrupoProcedimientoUpSertComponent },
      { path: ':id', component: GrupoProcedimientoDetailsComponent },
      { path: ':id/update', component: GrupoProcedimientoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/grupo-procedimiento/';

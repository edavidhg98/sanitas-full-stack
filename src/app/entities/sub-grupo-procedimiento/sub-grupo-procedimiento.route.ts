import { Routes } from '@angular/router';

import { SubGrupoProcedimientoComponent } from './sub-grupo-procedimiento.component';
import { SubGrupoProcedimientoUpSertComponent } from './sub-grupo-procedimiento-upsert.component';
import { SubGrupoProcedimientoDetailsComponent } from './sub-grupo-procedimiento-details.component';

export const subGrupoProcedimientoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubGrupoProcedimientoComponent },
      { path: 'create', component: SubGrupoProcedimientoUpSertComponent },
      { path: ':id', component: SubGrupoProcedimientoDetailsComponent },
      { path: ':id/update', component: SubGrupoProcedimientoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/sub-grupo-procedimiento/';

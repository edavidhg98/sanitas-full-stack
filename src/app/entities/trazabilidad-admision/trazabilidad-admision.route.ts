import { Routes } from '@angular/router';

import { TrazabilidadAdmisionComponent } from './trazabilidad-admision.component';
import { TrazabilidadAdmisionUpSertComponent } from './trazabilidad-admision-upsert.component';
import { TrazabilidadAdmisionDetailsComponent } from './trazabilidad-admision-details.component';

export const trazabilidadAdmisionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TrazabilidadAdmisionComponent },
      { path: 'create', component: TrazabilidadAdmisionUpSertComponent },
      { path: ':id', component: TrazabilidadAdmisionDetailsComponent },
      { path: ':id/update', component: TrazabilidadAdmisionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/trazabilidad-admision/';

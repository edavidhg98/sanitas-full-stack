import { Routes } from '@angular/router';

import { TrazabilidadAdmisionCargosComponent } from './trazabilidad-admision-cargos.component';
import { TrazabilidadAdmisionCargosUpSertComponent } from './trazabilidad-admision-cargos-upsert.component';
import { TrazabilidadAdmisionCargosDetailsComponent } from './trazabilidad-admision-cargos-details.component';

export const trazabilidadAdmisionCargosRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TrazabilidadAdmisionCargosComponent },
      { path: 'create', component: TrazabilidadAdmisionCargosUpSertComponent },
      { path: ':id', component: TrazabilidadAdmisionCargosDetailsComponent },
      { path: ':id/update', component: TrazabilidadAdmisionCargosUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/trazabilidad-admision-cargos/';

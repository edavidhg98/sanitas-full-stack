import { Routes } from '@angular/router';

import { OcupacionComponent } from './ocupacion.component';
import { OcupacionUpSertComponent } from './ocupacion-upsert.component';
import { OcupacionDetailsComponent } from './ocupacion-details.component';

export const ocupacionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: OcupacionComponent },
      { path: 'create', component: OcupacionUpSertComponent },
      { path: ':id', component: OcupacionDetailsComponent },
      { path: ':id/update', component: OcupacionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/ocupacion/';

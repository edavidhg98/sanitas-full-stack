import { Routes } from '@angular/router';

import { PrioridadComponent } from './prioridad.component';
import { PrioridadUpSertComponent } from './prioridad-upsert.component';
import { PrioridadDetailsComponent } from './prioridad-details.component';

export const prioridadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PrioridadComponent },
      { path: 'create', component: PrioridadUpSertComponent },
      { path: ':id', component: PrioridadDetailsComponent },
      { path: ':id/update', component: PrioridadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/prioridad/';

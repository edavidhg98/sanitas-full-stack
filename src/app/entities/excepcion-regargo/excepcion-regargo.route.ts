import { Routes } from '@angular/router';

import { ExcepcionRegargoComponent } from './excepcion-regargo.component';
import { ExcepcionRegargoUpSertComponent } from './excepcion-regargo-upsert.component';
import { ExcepcionRegargoDetailsComponent } from './excepcion-regargo-details.component';

export const excepcionRegargoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ExcepcionRegargoComponent },
      { path: 'create', component: ExcepcionRegargoUpSertComponent },
      { path: ':id', component: ExcepcionRegargoDetailsComponent },
      { path: ':id/update', component: ExcepcionRegargoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/excepcion-regargo/';

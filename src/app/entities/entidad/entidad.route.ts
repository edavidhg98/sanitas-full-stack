import { Routes } from '@angular/router';

import { EntidadComponent } from './entidad.component';
import { EntidadUpSertComponent } from './entidad-upsert.component';
import { EntidadDetailsComponent } from './entidad-details.component';

export const entidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EntidadComponent },
      { path: 'create', component: EntidadUpSertComponent },
      { path: ':id', component: EntidadDetailsComponent },
      { path: ':id/update', component: EntidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/entidad/';

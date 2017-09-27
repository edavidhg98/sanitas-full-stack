import { Routes } from '@angular/router';

import { LocalidadComponent } from './localidad.component';
import { LocalidadUpSertComponent } from './localidad-upsert.component';
import { LocalidadDetailsComponent } from './localidad-details.component';

export const localidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LocalidadComponent },
      { path: 'create', component: LocalidadUpSertComponent },
      { path: ':id', component: LocalidadDetailsComponent },
      { path: ':id/update', component: LocalidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/localidad/';

import { Routes } from '@angular/router';

import { HomologacionEntidadComponent } from './homologacion-entidad.component';
import { HomologacionEntidadUpSertComponent } from './homologacion-entidad-upsert.component';
import { HomologacionEntidadDetailsComponent } from './homologacion-entidad-details.component';

export const homologacionEntidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomologacionEntidadComponent },
      { path: 'create', component: HomologacionEntidadUpSertComponent },
      { path: ':id', component: HomologacionEntidadDetailsComponent },
      { path: ':id/update', component: HomologacionEntidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/homologacion-entidad/';

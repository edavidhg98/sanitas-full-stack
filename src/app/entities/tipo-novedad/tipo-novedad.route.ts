import { Routes } from '@angular/router';

import { TipoNovedadComponent } from './tipo-novedad.component';
import { TipoNovedadUpSertComponent } from './tipo-novedad-upsert.component';
import { TipoNovedadDetailsComponent } from './tipo-novedad-details.component';

export const tipoNovedadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoNovedadComponent },
      { path: 'create', component: TipoNovedadUpSertComponent },
      { path: ':id', component: TipoNovedadDetailsComponent },
      { path: ':id/update', component: TipoNovedadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-novedad/';

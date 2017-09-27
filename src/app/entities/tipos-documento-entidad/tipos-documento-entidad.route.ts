import { Routes } from '@angular/router';

import { TiposDocumentoEntidadComponent } from './tipos-documento-entidad.component';
import { TiposDocumentoEntidadUpSertComponent } from './tipos-documento-entidad-upsert.component';
import { TiposDocumentoEntidadDetailsComponent } from './tipos-documento-entidad-details.component';

export const tiposDocumentoEntidadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TiposDocumentoEntidadComponent },
      { path: 'create', component: TiposDocumentoEntidadUpSertComponent },
      { path: ':id', component: TiposDocumentoEntidadDetailsComponent },
      { path: ':id/update', component: TiposDocumentoEntidadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipos-documento-entidad/';

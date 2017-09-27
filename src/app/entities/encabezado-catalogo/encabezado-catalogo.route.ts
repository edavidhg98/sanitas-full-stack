import { Routes } from '@angular/router';

import { EncabezadoCatalogoComponent } from './encabezado-catalogo.component';
import { EncabezadoCatalogoUpSertComponent } from './encabezado-catalogo-upsert.component';
import { EncabezadoCatalogoDetailsComponent } from './encabezado-catalogo-details.component';

export const encabezadoCatalogoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EncabezadoCatalogoComponent },
      { path: 'create', component: EncabezadoCatalogoUpSertComponent },
      { path: ':id', component: EncabezadoCatalogoDetailsComponent },
      { path: ':id/update', component: EncabezadoCatalogoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/encabezado-catalogo/';

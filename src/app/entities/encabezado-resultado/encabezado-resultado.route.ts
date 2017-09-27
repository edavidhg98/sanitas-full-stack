import { Routes } from '@angular/router';

import { EncabezadoResultadoComponent } from './encabezado-resultado.component';
import { EncabezadoResultadoUpSertComponent } from './encabezado-resultado-upsert.component';
import { EncabezadoResultadoDetailsComponent } from './encabezado-resultado-details.component';

export const encabezadoResultadoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EncabezadoResultadoComponent },
      { path: 'create', component: EncabezadoResultadoUpSertComponent },
      { path: ':id', component: EncabezadoResultadoDetailsComponent },
      { path: ':id/update', component: EncabezadoResultadoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/encabezado-resultado/';

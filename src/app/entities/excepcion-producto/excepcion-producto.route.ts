import { Routes } from '@angular/router';

import { ExcepcionProductoComponent } from './excepcion-producto.component';
import { ExcepcionProductoUpSertComponent } from './excepcion-producto-upsert.component';
import { ExcepcionProductoDetailsComponent } from './excepcion-producto-details.component';

export const excepcionProductoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ExcepcionProductoComponent },
      { path: 'create', component: ExcepcionProductoUpSertComponent },
      { path: ':id', component: ExcepcionProductoDetailsComponent },
      { path: ':id/update', component: ExcepcionProductoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/excepcion-producto/';

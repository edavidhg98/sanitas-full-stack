import { Routes } from '@angular/router';

import { PaisComponent } from './pais.component';
import { PaisUpSertComponent } from './pais-upsert.component';
import { PaisDetailsComponent } from './pais-details.component';

export const paisRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PaisComponent },
      { path: 'create', component: PaisUpSertComponent },
      { path: ':id', component: PaisDetailsComponent },
      { path: ':id/update', component: PaisUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/pais/';

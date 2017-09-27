import { Routes } from '@angular/router';

import { EntidadUvrComponent } from './entidad-uvr.component';
import { EntidadUvrUpSertComponent } from './entidad-uvr-upsert.component';
import { EntidadUvrDetailsComponent } from './entidad-uvr-details.component';

export const entidadUvrRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EntidadUvrComponent },
      { path: 'create', component: EntidadUvrUpSertComponent },
      { path: ':id', component: EntidadUvrDetailsComponent },
      { path: ':id/update', component: EntidadUvrUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/entidad-uvr/';

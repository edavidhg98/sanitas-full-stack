import { Routes } from '@angular/router';

import { CiudadComponent } from './ciudad.component';
import { CiudadUpSertComponent } from './ciudad-upsert.component';
import { CiudadDetailsComponent } from './ciudad-details.component';

export const ciudadRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CiudadComponent },
      { path: 'create', component: CiudadUpSertComponent },
      { path: ':id', component: CiudadDetailsComponent },
      { path: ':id/update', component: CiudadUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/ciudad/';

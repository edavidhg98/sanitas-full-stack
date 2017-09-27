import { Routes } from '@angular/router';

import { PrestadorComponent } from './prestador.component';
import { PrestadorUpSertComponent } from './prestador-upsert.component';
import { PrestadorDetailsComponent } from './prestador-details.component';

export const prestadorRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PrestadorComponent },
      { path: 'create', component: PrestadorUpSertComponent },
      { path: ':id', component: PrestadorDetailsComponent },
      { path: ':id/update', component: PrestadorUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/prestador/';

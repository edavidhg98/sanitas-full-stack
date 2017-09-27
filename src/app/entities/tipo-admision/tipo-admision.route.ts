import { Routes } from '@angular/router';

import { TipoAdmisionComponent } from './tipo-admision.component';
import { TipoAdmisionUpSertComponent } from './tipo-admision-upsert.component';
import { TipoAdmisionDetailsComponent } from './tipo-admision-details.component';

export const tipoAdmisionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoAdmisionComponent },
      { path: 'create', component: TipoAdmisionUpSertComponent },
      { path: ':id', component: TipoAdmisionDetailsComponent },
      { path: ':id/update', component: TipoAdmisionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-admision/';

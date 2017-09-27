import { Routes } from '@angular/router';

import { EntidadAdmisionComponent } from './entidad-admision.component';
import { EntidadAdmisionUpSertComponent } from './entidad-admision-upsert.component';
import { EntidadAdmisionDetailsComponent } from './entidad-admision-details.component';

export const entidadAdmisionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EntidadAdmisionComponent },
      { path: 'create', component: EntidadAdmisionUpSertComponent },
      { path: ':id', component: EntidadAdmisionDetailsComponent },
      { path: ':id/update', component: EntidadAdmisionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/entidad-admision/';

import { Routes } from '@angular/router';

import { InstitucionComponent } from './institucion.component';
import { InstitucionUpSertComponent } from './institucion-upsert.component';
import { InstitucionDetailsComponent } from './institucion-details.component';

export const institucionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: InstitucionComponent },
      { path: 'create', component: InstitucionUpSertComponent },
      { path: ':id', component: InstitucionDetailsComponent },
      { path: ':id/update', component: InstitucionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/institucion/';

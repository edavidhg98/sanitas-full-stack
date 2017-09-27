import { Routes } from '@angular/router';

import { SeccionComponent } from './seccion.component';
import { SeccionUpSertComponent } from './seccion-upsert.component';
import { SeccionDetailsComponent } from './seccion-details.component';

export const seccionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SeccionComponent },
      { path: 'create', component: SeccionUpSertComponent },
      { path: ':id', component: SeccionDetailsComponent },
      { path: ':id/update', component: SeccionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/seccion/';

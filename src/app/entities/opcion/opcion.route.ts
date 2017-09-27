import { Routes } from '@angular/router';

import { OpcionComponent } from './opcion.component';
import { OpcionUpSertComponent } from './opcion-upsert.component';
import { OpcionDetailsComponent } from './opcion-details.component';

export const opcionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: OpcionComponent },
      { path: 'create', component: OpcionUpSertComponent },
      { path: ':id', component: OpcionDetailsComponent },
      { path: ':id/update', component: OpcionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/opcion/';

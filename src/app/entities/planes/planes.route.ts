import { Routes } from '@angular/router';

import { PlanesComponent } from './planes.component';
import { PlanesUpSertComponent } from './planes-upsert.component';
import { PlanesDetailsComponent } from './planes-details.component';

export const planesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PlanesComponent },
      { path: 'create', component: PlanesUpSertComponent },
      { path: ':id', component: PlanesDetailsComponent },
      { path: ':id/update', component: PlanesUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/planes/';

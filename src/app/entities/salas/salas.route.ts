import { Routes } from '@angular/router';

import { SalasComponent } from './salas.component';
import { SalasUpSertComponent } from './salas-upsert.component';
import { SalasDetailsComponent } from './salas-details.component';

export const salasRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SalasComponent },
      { path: 'create', component: SalasUpSertComponent },
      { path: ':id', component: SalasDetailsComponent },
      { path: ':id/update', component: SalasUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/salas/';

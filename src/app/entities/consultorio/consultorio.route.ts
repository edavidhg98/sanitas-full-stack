import { Routes } from '@angular/router';

import { ConsultorioComponent } from './consultorio.component';
import { ConsultorioUpSertComponent } from './consultorio-upsert.component';
import { ConsultorioDetailsComponent } from './consultorio-details.component';

export const consultorioRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ConsultorioComponent },
      { path: 'create', component: ConsultorioUpSertComponent },
      { path: ':id', component: ConsultorioDetailsComponent },
      { path: ':id/update', component: ConsultorioUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/consultorio/';

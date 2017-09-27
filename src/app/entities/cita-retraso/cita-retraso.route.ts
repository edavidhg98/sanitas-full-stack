import { Routes } from '@angular/router';

import { CitaRetrasoComponent } from './cita-retraso.component';
import { CitaRetrasoUpSertComponent } from './cita-retraso-upsert.component';
import { CitaRetrasoDetailsComponent } from './cita-retraso-details.component';

export const citaRetrasoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CitaRetrasoComponent },
      { path: 'create', component: CitaRetrasoUpSertComponent },
      { path: ':id', component: CitaRetrasoDetailsComponent },
      { path: ':id/update', component: CitaRetrasoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/cita-retraso/';

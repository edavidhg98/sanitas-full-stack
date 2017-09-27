import { Routes } from '@angular/router';

import { AdmisionObservacionesComponent } from './admision-observaciones.component';
import { AdmisionObservacionesUpSertComponent } from './admision-observaciones-upsert.component';
import { AdmisionObservacionesDetailsComponent } from './admision-observaciones-details.component';

export const admisionObservacionesRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AdmisionObservacionesComponent },
      { path: 'create', component: AdmisionObservacionesUpSertComponent },
      { path: ':id', component: AdmisionObservacionesDetailsComponent },
      { path: ':id/update', component: AdmisionObservacionesUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/admision-observaciones/';

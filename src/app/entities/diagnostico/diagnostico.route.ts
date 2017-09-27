import { Routes } from '@angular/router';

import { DiagnosticoComponent } from './diagnostico.component';
import { DiagnosticoUpSertComponent } from './diagnostico-upsert.component';
import { DiagnosticoDetailsComponent } from './diagnostico-details.component';

export const diagnosticoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DiagnosticoComponent },
      { path: 'create', component: DiagnosticoUpSertComponent },
      { path: ':id', component: DiagnosticoDetailsComponent },
      { path: ':id/update', component: DiagnosticoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/diagnostico/';

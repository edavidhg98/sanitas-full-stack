import { Routes } from '@angular/router';

import { PorcentajeMedicoComponent } from './porcentaje-medico.component';
import { PorcentajeMedicoUpSertComponent } from './porcentaje-medico-upsert.component';
import { PorcentajeMedicoDetailsComponent } from './porcentaje-medico-details.component';

export const porcentajeMedicoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PorcentajeMedicoComponent },
      { path: 'create', component: PorcentajeMedicoUpSertComponent },
      { path: ':id', component: PorcentajeMedicoDetailsComponent },
      { path: ':id/update', component: PorcentajeMedicoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/porcentaje-medico/';

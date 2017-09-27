import { Routes } from '@angular/router';

import { HomologacionServiciosAgfaComponent } from './homologacion-servicios-agfa.component';
import { HomologacionServiciosAgfaUpSertComponent } from './homologacion-servicios-agfa-upsert.component';
import { HomologacionServiciosAgfaDetailsComponent } from './homologacion-servicios-agfa-details.component';

export const homologacionServiciosAgfaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomologacionServiciosAgfaComponent },
      { path: 'create', component: HomologacionServiciosAgfaUpSertComponent },
      { path: ':id', component: HomologacionServiciosAgfaDetailsComponent },
      { path: ':id/update', component: HomologacionServiciosAgfaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/homologacion-servicios-agfa/';

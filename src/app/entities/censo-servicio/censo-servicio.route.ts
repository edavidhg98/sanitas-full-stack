import { Routes } from '@angular/router';

import { CensoServicioComponent } from './censo-servicio.component';
import { CensoServicioUpSertComponent } from './censo-servicio-upsert.component';
import { CensoServicioDetailsComponent } from './censo-servicio-details.component';

export const censoServicioRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CensoServicioComponent },
      { path: 'create', component: CensoServicioUpSertComponent },
      { path: ':id', component: CensoServicioDetailsComponent },
      { path: ':id/update', component: CensoServicioUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/censo-servicio/';

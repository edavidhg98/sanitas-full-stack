import { Routes } from '@angular/router';

import { TiempoRecargoComponent } from './tiempo-recargo.component';
import { TiempoRecargoUpSertComponent } from './tiempo-recargo-upsert.component';
import { TiempoRecargoDetailsComponent } from './tiempo-recargo-details.component';

export const tiempoRecargoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TiempoRecargoComponent },
      { path: 'create', component: TiempoRecargoUpSertComponent },
      { path: ':id', component: TiempoRecargoDetailsComponent },
      { path: ':id/update', component: TiempoRecargoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tiempo-recargo/';

import { Routes } from '@angular/router';

import { RecargoComponent } from './recargo.component';
import { RecargoUpSertComponent } from './recargo-upsert.component';
import { RecargoDetailsComponent } from './recargo-details.component';

export const recargoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RecargoComponent },
      { path: 'create', component: RecargoUpSertComponent },
      { path: ':id', component: RecargoDetailsComponent },
      { path: ':id/update', component: RecargoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/recargo/';

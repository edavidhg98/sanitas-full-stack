import { Routes } from '@angular/router';

import { RecargoAutomaticoComponent } from './recargo-automatico.component';
import { RecargoAutomaticoUpSertComponent } from './recargo-automatico-upsert.component';
import { RecargoAutomaticoDetailsComponent } from './recargo-automatico-details.component';

export const recargoAutomaticoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RecargoAutomaticoComponent },
      { path: 'create', component: RecargoAutomaticoUpSertComponent },
      { path: ':id', component: RecargoAutomaticoDetailsComponent },
      { path: ':id/update', component: RecargoAutomaticoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/recargo-automatico/';

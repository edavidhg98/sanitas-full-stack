import { Routes } from '@angular/router';

import { RecalculoAutomaticoComponent } from './recalculo-automatico.component';
import { RecalculoAutomaticoUpSertComponent } from './recalculo-automatico-upsert.component';
import { RecalculoAutomaticoDetailsComponent } from './recalculo-automatico-details.component';

export const recalculoAutomaticoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RecalculoAutomaticoComponent },
      { path: 'create', component: RecalculoAutomaticoUpSertComponent },
      { path: ':id', component: RecalculoAutomaticoDetailsComponent },
      { path: ':id/update', component: RecalculoAutomaticoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/recalculo-automatico/';

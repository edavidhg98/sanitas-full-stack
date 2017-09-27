import { Routes } from '@angular/router';

import { TipoPlanComponent } from './tipo-plan.component';
import { TipoPlanUpSertComponent } from './tipo-plan-upsert.component';
import { TipoPlanDetailsComponent } from './tipo-plan-details.component';

export const tipoPlanRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoPlanComponent },
      { path: 'create', component: TipoPlanUpSertComponent },
      { path: ':id', component: TipoPlanDetailsComponent },
      { path: ':id/update', component: TipoPlanUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-plan/';

import { Routes } from '@angular/router';

import { CamaPlanComponent } from './cama-plan.component';
import { CamaPlanUpSertComponent } from './cama-plan-upsert.component';
import { CamaPlanDetailsComponent } from './cama-plan-details.component';

export const camaPlanRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CamaPlanComponent },
      { path: 'create', component: CamaPlanUpSertComponent },
      { path: ':id', component: CamaPlanDetailsComponent },
      { path: ':id/update', component: CamaPlanUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/cama-plan/';

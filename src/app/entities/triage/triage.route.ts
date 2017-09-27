import { Routes } from '@angular/router';

import { TriageComponent } from './triage.component';
import { TriageUpSertComponent } from './triage-upsert.component';
import { TriageDetailsComponent } from './triage-details.component';

export const triageRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TriageComponent },
      { path: 'create', component: TriageUpSertComponent },
      { path: ':id', component: TriageDetailsComponent },
      { path: ':id/update', component: TriageUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/triage/';

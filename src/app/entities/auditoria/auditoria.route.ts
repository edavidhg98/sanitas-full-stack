import { Routes } from '@angular/router';

import { AuditoriaComponent } from './auditoria.component';
import { AuditoriaUpSertComponent } from './auditoria-upsert.component';
import { AuditoriaDetailsComponent } from './auditoria-details.component';

export const auditoriaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuditoriaComponent },
      { path: 'create', component: AuditoriaUpSertComponent },
      { path: ':id', component: AuditoriaDetailsComponent },
      { path: ':id/update', component: AuditoriaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/auditoria/';

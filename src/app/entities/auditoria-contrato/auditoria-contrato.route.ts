import { Routes } from '@angular/router';

import { AuditoriaContratoComponent } from './auditoria-contrato.component';
import { AuditoriaContratoUpSertComponent } from './auditoria-contrato-upsert.component';
import { AuditoriaContratoDetailsComponent } from './auditoria-contrato-details.component';

export const auditoriaContratoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuditoriaContratoComponent },
      { path: 'create', component: AuditoriaContratoUpSertComponent },
      { path: ':id', component: AuditoriaContratoDetailsComponent },
      { path: ':id/update', component: AuditoriaContratoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/auditoria-contrato/';

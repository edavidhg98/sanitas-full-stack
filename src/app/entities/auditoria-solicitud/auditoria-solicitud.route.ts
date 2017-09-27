import { Routes } from '@angular/router';

import { AuditoriaSolicitudComponent } from './auditoria-solicitud.component';
import { AuditoriaSolicitudUpSertComponent } from './auditoria-solicitud-upsert.component';
import { AuditoriaSolicitudDetailsComponent } from './auditoria-solicitud-details.component';

export const auditoriaSolicitudRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuditoriaSolicitudComponent },
      { path: 'create', component: AuditoriaSolicitudUpSertComponent },
      { path: ':id', component: AuditoriaSolicitudDetailsComponent },
      { path: ':id/update', component: AuditoriaSolicitudUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/auditoria-solicitud/';

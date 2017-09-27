import { Routes } from '@angular/router';

import { AuditoriaEstadoAdmisionComponent } from './auditoria-estado-admision.component';
import { AuditoriaEstadoAdmisionUpSertComponent } from './auditoria-estado-admision-upsert.component';
import { AuditoriaEstadoAdmisionDetailsComponent } from './auditoria-estado-admision-details.component';

export const auditoriaEstadoAdmisionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuditoriaEstadoAdmisionComponent },
      { path: 'create', component: AuditoriaEstadoAdmisionUpSertComponent },
      { path: ':id', component: AuditoriaEstadoAdmisionDetailsComponent },
      { path: ':id/update', component: AuditoriaEstadoAdmisionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/auditoria-estado-admision/';

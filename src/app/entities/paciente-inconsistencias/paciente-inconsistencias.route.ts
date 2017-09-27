import { Routes } from '@angular/router';

import { PacienteInconsistenciasComponent } from './paciente-inconsistencias.component';
import { PacienteInconsistenciasUpSertComponent } from './paciente-inconsistencias-upsert.component';
import { PacienteInconsistenciasDetailsComponent } from './paciente-inconsistencias-details.component';

export const pacienteInconsistenciasRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PacienteInconsistenciasComponent },
      { path: 'create', component: PacienteInconsistenciasUpSertComponent },
      { path: ':id', component: PacienteInconsistenciasDetailsComponent },
      { path: ':id/update', component: PacienteInconsistenciasUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/paciente-inconsistencias/';

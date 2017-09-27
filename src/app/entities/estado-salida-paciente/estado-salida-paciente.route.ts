import { Routes } from '@angular/router';

import { EstadoSalidaPacienteComponent } from './estado-salida-paciente.component';
import { EstadoSalidaPacienteUpSertComponent } from './estado-salida-paciente-upsert.component';
import { EstadoSalidaPacienteDetailsComponent } from './estado-salida-paciente-details.component';

export const estadoSalidaPacienteRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EstadoSalidaPacienteComponent },
      { path: 'create', component: EstadoSalidaPacienteUpSertComponent },
      { path: ':id', component: EstadoSalidaPacienteDetailsComponent },
      { path: ':id/update', component: EstadoSalidaPacienteUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/estado-salida-paciente/';

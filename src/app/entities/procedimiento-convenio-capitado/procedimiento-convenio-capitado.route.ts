import { Routes } from '@angular/router';

import { ProcedimientoConvenioCapitadoComponent } from './procedimiento-convenio-capitado.component';
import { ProcedimientoConvenioCapitadoUpSertComponent } from './procedimiento-convenio-capitado-upsert.component';
import { ProcedimientoConvenioCapitadoDetailsComponent } from './procedimiento-convenio-capitado-details.component';

export const procedimientoConvenioCapitadoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProcedimientoConvenioCapitadoComponent },
      { path: 'create', component: ProcedimientoConvenioCapitadoUpSertComponent },
      { path: ':id', component: ProcedimientoConvenioCapitadoDetailsComponent },
      { path: ':id/update', component: ProcedimientoConvenioCapitadoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/procedimiento-convenio-capitado/';

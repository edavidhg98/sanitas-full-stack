import { Routes } from '@angular/router';

import { TipoTarifaVacunacionComponent } from './tipo-tarifa-vacunacion.component';
import { TipoTarifaVacunacionUpSertComponent } from './tipo-tarifa-vacunacion-upsert.component';
import { TipoTarifaVacunacionDetailsComponent } from './tipo-tarifa-vacunacion-details.component';

export const tipoTarifaVacunacionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoTarifaVacunacionComponent },
      { path: 'create', component: TipoTarifaVacunacionUpSertComponent },
      { path: ':id', component: TipoTarifaVacunacionDetailsComponent },
      { path: ':id/update', component: TipoTarifaVacunacionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-tarifa-vacunacion/';

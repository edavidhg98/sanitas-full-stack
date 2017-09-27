import { Routes } from '@angular/router';

import { TarifaVacunacionComponent } from './tarifa-vacunacion.component';
import { TarifaVacunacionUpSertComponent } from './tarifa-vacunacion-upsert.component';
import { TarifaVacunacionDetailsComponent } from './tarifa-vacunacion-details.component';

export const tarifaVacunacionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TarifaVacunacionComponent },
      { path: 'create', component: TarifaVacunacionUpSertComponent },
      { path: ':id', component: TarifaVacunacionDetailsComponent },
      { path: ':id/update', component: TarifaVacunacionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tarifa-vacunacion/';

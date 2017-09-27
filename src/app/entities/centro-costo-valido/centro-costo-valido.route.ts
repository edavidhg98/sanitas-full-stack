import { Routes } from '@angular/router';

import { CentroCostoValidoComponent } from './centro-costo-valido.component';
import { CentroCostoValidoUpSertComponent } from './centro-costo-valido-upsert.component';
import { CentroCostoValidoDetailsComponent } from './centro-costo-valido-details.component';

export const centroCostoValidoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CentroCostoValidoComponent },
      { path: 'create', component: CentroCostoValidoUpSertComponent },
      { path: ':id', component: CentroCostoValidoDetailsComponent },
      { path: ':id/update', component: CentroCostoValidoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/centro-costo-valido/';

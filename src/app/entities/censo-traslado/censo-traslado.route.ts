import { Routes } from '@angular/router';

import { CensoTrasladoComponent } from './censo-traslado.component';
import { CensoTrasladoUpSertComponent } from './censo-traslado-upsert.component';
import { CensoTrasladoDetailsComponent } from './censo-traslado-details.component';

export const censoTrasladoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CensoTrasladoComponent },
      { path: 'create', component: CensoTrasladoUpSertComponent },
      { path: ':id', component: CensoTrasladoDetailsComponent },
      { path: ':id/update', component: CensoTrasladoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/censo-traslado/';

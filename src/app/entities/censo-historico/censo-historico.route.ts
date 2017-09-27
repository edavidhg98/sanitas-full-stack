import { Routes } from '@angular/router';

import { CensoHistoricoComponent } from './censo-historico.component';
import { CensoHistoricoUpSertComponent } from './censo-historico-upsert.component';
import { CensoHistoricoDetailsComponent } from './censo-historico-details.component';

export const censoHistoricoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CensoHistoricoComponent },
      { path: 'create', component: CensoHistoricoUpSertComponent },
      { path: ':id', component: CensoHistoricoDetailsComponent },
      { path: ':id/update', component: CensoHistoricoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/censo-historico/';

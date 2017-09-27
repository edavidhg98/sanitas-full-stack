import { Routes } from '@angular/router';

import { GrupoEtareoComponent } from './grupo-etareo.component';
import { GrupoEtareoUpSertComponent } from './grupo-etareo-upsert.component';
import { GrupoEtareoDetailsComponent } from './grupo-etareo-details.component';

export const grupoEtareoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: GrupoEtareoComponent },
      { path: 'create', component: GrupoEtareoUpSertComponent },
      { path: ':id', component: GrupoEtareoDetailsComponent },
      { path: ':id/update', component: GrupoEtareoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/grupo-etareo/';

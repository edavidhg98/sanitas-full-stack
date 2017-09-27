import { Routes } from '@angular/router';

import { NivelCargoComponent } from './nivel-cargo.component';
import { NivelCargoUpSertComponent } from './nivel-cargo-upsert.component';
import { NivelCargoDetailsComponent } from './nivel-cargo-details.component';

export const nivelCargoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NivelCargoComponent },
      { path: 'create', component: NivelCargoUpSertComponent },
      { path: ':id', component: NivelCargoDetailsComponent },
      { path: ':id/update', component: NivelCargoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/nivel-cargo/';

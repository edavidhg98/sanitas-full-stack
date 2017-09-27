import { Routes } from '@angular/router';

import { CamaComponent } from './cama.component';
import { CamaUpSertComponent } from './cama-upsert.component';
import { CamaDetailsComponent } from './cama-details.component';

export const camaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CamaComponent },
      { path: 'create', component: CamaUpSertComponent },
      { path: ':id', component: CamaDetailsComponent },
      { path: ':id/update', component: CamaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/cama/';

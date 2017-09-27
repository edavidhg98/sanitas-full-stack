import { Routes } from '@angular/router';

import { TipoCamaComponent } from './tipo-cama.component';
import { TipoCamaUpSertComponent } from './tipo-cama-upsert.component';
import { TipoCamaDetailsComponent } from './tipo-cama-details.component';

export const tipoCamaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoCamaComponent },
      { path: 'create', component: TipoCamaUpSertComponent },
      { path: ':id', component: TipoCamaDetailsComponent },
      { path: ':id/update', component: TipoCamaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-cama/';

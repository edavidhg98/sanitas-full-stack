import { Routes } from '@angular/router';

import { ParTipoCampoComponent } from './par-tipo-campo.component';
import { ParTipoCampoUpSertComponent } from './par-tipo-campo-upsert.component';
import { ParTipoCampoDetailsComponent } from './par-tipo-campo-details.component';

export const parTipoCampoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ParTipoCampoComponent },
      { path: 'create', component: ParTipoCampoUpSertComponent },
      { path: ':id', component: ParTipoCampoDetailsComponent },
      { path: ':id/update', component: ParTipoCampoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/par-tipo-campo/';

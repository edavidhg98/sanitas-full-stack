import { Routes } from '@angular/router';

import { ParFormatoCampoComponent } from './par-formato-campo.component';
import { ParFormatoCampoUpSertComponent } from './par-formato-campo-upsert.component';
import { ParFormatoCampoDetailsComponent } from './par-formato-campo-details.component';

export const parFormatoCampoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ParFormatoCampoComponent },
      { path: 'create', component: ParFormatoCampoUpSertComponent },
      { path: ':id', component: ParFormatoCampoDetailsComponent },
      { path: ':id/update', component: ParFormatoCampoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/par-formato-campo/';

import { Routes } from '@angular/router';

import { ParDependenciaCampoComponent } from './par-dependencia-campo.component';
import { ParDependenciaCampoUpSertComponent } from './par-dependencia-campo-upsert.component';
import { ParDependenciaCampoDetailsComponent } from './par-dependencia-campo-details.component';

export const parDependenciaCampoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ParDependenciaCampoComponent },
      { path: 'create', component: ParDependenciaCampoUpSertComponent },
      { path: ':id', component: ParDependenciaCampoDetailsComponent },
      { path: ':id/update', component: ParDependenciaCampoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/par-dependencia-campo/';

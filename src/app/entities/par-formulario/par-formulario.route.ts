import { Routes } from '@angular/router';

import { ParFormularioComponent } from './par-formulario.component';
import { ParFormularioUpSertComponent } from './par-formulario-upsert.component';
import { ParFormularioDetailsComponent } from './par-formulario-details.component';

export const parFormularioRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ParFormularioComponent },
      { path: 'create', component: ParFormularioUpSertComponent },
      { path: ':id', component: ParFormularioDetailsComponent },
      { path: ':id/update', component: ParFormularioUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/par-formulario/';

import { Routes } from '@angular/router';

import { TipoAfiliadoComponent } from './tipo-afiliado.component';
import { TipoAfiliadoUpSertComponent } from './tipo-afiliado-upsert.component';
import { TipoAfiliadoDetailsComponent } from './tipo-afiliado-details.component';

export const tipoAfiliadoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoAfiliadoComponent },
      { path: 'create', component: TipoAfiliadoUpSertComponent },
      { path: ':id', component: TipoAfiliadoDetailsComponent },
      { path: ':id/update', component: TipoAfiliadoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-afiliado/';

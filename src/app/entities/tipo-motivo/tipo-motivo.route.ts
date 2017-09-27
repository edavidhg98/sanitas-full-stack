import { Routes } from '@angular/router';

import { TipoMotivoComponent } from './tipo-motivo.component';
import { TipoMotivoUpSertComponent } from './tipo-motivo-upsert.component';
import { TipoMotivoDetailsComponent } from './tipo-motivo-details.component';

export const tipoMotivoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoMotivoComponent },
      { path: 'create', component: TipoMotivoUpSertComponent },
      { path: ':id', component: TipoMotivoDetailsComponent },
      { path: ':id/update', component: TipoMotivoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-motivo/';

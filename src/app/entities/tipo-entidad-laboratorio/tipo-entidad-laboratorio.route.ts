import { Routes } from '@angular/router';

import { TipoEntidadLaboratorioComponent } from './tipo-entidad-laboratorio.component';
import { TipoEntidadLaboratorioUpSertComponent } from './tipo-entidad-laboratorio-upsert.component';
import { TipoEntidadLaboratorioDetailsComponent } from './tipo-entidad-laboratorio-details.component';

export const tipoEntidadLaboratorioRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TipoEntidadLaboratorioComponent },
      { path: 'create', component: TipoEntidadLaboratorioUpSertComponent },
      { path: ':id', component: TipoEntidadLaboratorioDetailsComponent },
      { path: ':id/update', component: TipoEntidadLaboratorioUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipo-entidad-laboratorio/';

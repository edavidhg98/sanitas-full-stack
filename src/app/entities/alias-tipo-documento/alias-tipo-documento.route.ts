import { Routes } from '@angular/router';

import { AliasTipoDocumentoComponent } from './alias-tipo-documento.component';
import { AliasTipoDocumentoUpSertComponent } from './alias-tipo-documento-upsert.component';
import { AliasTipoDocumentoDetailsComponent } from './alias-tipo-documento-details.component';

export const aliasTipoDocumentoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AliasTipoDocumentoComponent },
      { path: 'create', component: AliasTipoDocumentoUpSertComponent },
      { path: ':id', component: AliasTipoDocumentoDetailsComponent },
      { path: ':id/update', component: AliasTipoDocumentoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/alias-tipo-documento/';

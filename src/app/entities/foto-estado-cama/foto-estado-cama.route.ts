import { Routes } from '@angular/router';

import { FotoEstadoCamaComponent } from './foto-estado-cama.component';
import { FotoEstadoCamaUpSertComponent } from './foto-estado-cama-upsert.component';
import { FotoEstadoCamaDetailsComponent } from './foto-estado-cama-details.component';

export const fotoEstadoCamaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: FotoEstadoCamaComponent },
      { path: 'create', component: FotoEstadoCamaUpSertComponent },
      { path: ':id', component: FotoEstadoCamaDetailsComponent },
      { path: ':id/update', component: FotoEstadoCamaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/foto-estado-cama/';

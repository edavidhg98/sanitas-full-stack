import { Routes } from '@angular/router';

import { RutaLiquidacionComponent } from './ruta-liquidacion.component';
import { RutaLiquidacionUpSertComponent } from './ruta-liquidacion-upsert.component';
import { RutaLiquidacionDetailsComponent } from './ruta-liquidacion-details.component';

export const rutaLiquidacionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: RutaLiquidacionComponent },
      { path: 'create', component: RutaLiquidacionUpSertComponent },
      { path: ':id', component: RutaLiquidacionDetailsComponent },
      { path: ':id/update', component: RutaLiquidacionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/ruta-liquidacion/';

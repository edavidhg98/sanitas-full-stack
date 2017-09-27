import { Routes } from '@angular/router';

import { NumeroSecuenciaComponent } from './numero-secuencia.component';
import { NumeroSecuenciaUpSertComponent } from './numero-secuencia-upsert.component';
import { NumeroSecuenciaDetailsComponent } from './numero-secuencia-details.component';

export const numeroSecuenciaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: NumeroSecuenciaComponent },
      { path: 'create', component: NumeroSecuenciaUpSertComponent },
      { path: ':id', component: NumeroSecuenciaDetailsComponent },
      { path: ':id/update', component: NumeroSecuenciaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/numero-secuencia/';

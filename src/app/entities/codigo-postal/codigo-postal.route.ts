import { Routes } from '@angular/router';

import { CodigoPostalComponent } from './codigo-postal.component';
import { CodigoPostalUpSertComponent } from './codigo-postal-upsert.component';
import { CodigoPostalDetailsComponent } from './codigo-postal-details.component';

export const codigoPostalRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CodigoPostalComponent },
      { path: 'create', component: CodigoPostalUpSertComponent },
      { path: ':id', component: CodigoPostalDetailsComponent },
      { path: ':id/update', component: CodigoPostalUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/codigo-postal/';

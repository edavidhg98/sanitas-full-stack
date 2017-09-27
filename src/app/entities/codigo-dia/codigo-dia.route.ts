import { Routes } from '@angular/router';

import { CodigoDiaComponent } from './codigo-dia.component';
import { CodigoDiaUpSertComponent } from './codigo-dia-upsert.component';
import { CodigoDiaDetailsComponent } from './codigo-dia-details.component';

export const codigoDiaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CodigoDiaComponent },
      { path: 'create', component: CodigoDiaUpSertComponent },
      { path: ':id', component: CodigoDiaDetailsComponent },
      { path: ':id/update', component: CodigoDiaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/codigo-dia/';

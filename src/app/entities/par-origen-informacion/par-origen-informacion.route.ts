import { Routes } from '@angular/router';

import { ParOrigenInformacionComponent } from './par-origen-informacion.component';
import { ParOrigenInformacionUpSertComponent } from './par-origen-informacion-upsert.component';
import { ParOrigenInformacionDetailsComponent } from './par-origen-informacion-details.component';

export const parOrigenInformacionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ParOrigenInformacionComponent },
      { path: 'create', component: ParOrigenInformacionUpSertComponent },
      { path: ':id', component: ParOrigenInformacionDetailsComponent },
      { path: ':id/update', component: ParOrigenInformacionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/par-origen-informacion/';

import { Routes } from '@angular/router';

import { AutorizacionBhComponent } from './autorizacion-bh.component';
import { AutorizacionBhUpSertComponent } from './autorizacion-bh-upsert.component';
import { AutorizacionBhDetailsComponent } from './autorizacion-bh-details.component';

export const autorizacionBhRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AutorizacionBhComponent },
      { path: 'create', component: AutorizacionBhUpSertComponent },
      { path: ':id', component: AutorizacionBhDetailsComponent },
      { path: ':id/update', component: AutorizacionBhUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/autorizacion-bh/';

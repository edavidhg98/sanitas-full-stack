import { Routes } from '@angular/router';

import { TiposValoresComponent } from './tipos-valores.component';
import { TiposValoresUpSertComponent } from './tipos-valores-upsert.component';
import { TiposValoresDetailsComponent } from './tipos-valores-details.component';

export const tiposValoresRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TiposValoresComponent },
      { path: 'create', component: TiposValoresUpSertComponent },
      { path: ':id', component: TiposValoresDetailsComponent },
      { path: ':id/update', component: TiposValoresUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/tipos-valores/';

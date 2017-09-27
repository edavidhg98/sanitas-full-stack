import { Routes } from '@angular/router';

import { AnticipoComponent } from './anticipo.component';
import { AnticipoUpSertComponent } from './anticipo-upsert.component';
import { AnticipoDetailsComponent } from './anticipo-details.component';

export const anticipoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AnticipoComponent },
      { path: 'create', component: AnticipoUpSertComponent },
      { path: ':id', component: AnticipoDetailsComponent },
      { path: ':id/update', component: AnticipoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/anticipo/';

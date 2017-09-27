import { Routes } from '@angular/router';

import { ZonaHorariaComponent } from './zona-horaria.component';
import { ZonaHorariaUpSertComponent } from './zona-horaria-upsert.component';
import { ZonaHorariaDetailsComponent } from './zona-horaria-details.component';

export const zonaHorariaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ZonaHorariaComponent },
      { path: 'create', component: ZonaHorariaUpSertComponent },
      { path: ':id', component: ZonaHorariaDetailsComponent },
      { path: ':id/update', component: ZonaHorariaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/zona-horaria/';

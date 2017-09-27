import { Routes } from '@angular/router';

import { ZonaHorariaVeranoComponent } from './zona-horaria-verano.component';
import { ZonaHorariaVeranoUpSertComponent } from './zona-horaria-verano-upsert.component';
import { ZonaHorariaVeranoDetailsComponent } from './zona-horaria-verano-details.component';

export const zonaHorariaVeranoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ZonaHorariaVeranoComponent },
      { path: 'create', component: ZonaHorariaVeranoUpSertComponent },
      { path: ':id', component: ZonaHorariaVeranoDetailsComponent },
      { path: ':id/update', component: ZonaHorariaVeranoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/zona-horaria-verano/';

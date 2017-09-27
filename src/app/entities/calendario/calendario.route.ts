import { Routes } from '@angular/router';

import { CalendarioComponent } from './calendario.component';
import { CalendarioUpSertComponent } from './calendario-upsert.component';
import { CalendarioDetailsComponent } from './calendario-details.component';

export const calendarioRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CalendarioComponent },
      { path: 'create', component: CalendarioUpSertComponent },
      { path: ':id', component: CalendarioDetailsComponent },
      { path: ':id/update', component: CalendarioUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/calendario/';

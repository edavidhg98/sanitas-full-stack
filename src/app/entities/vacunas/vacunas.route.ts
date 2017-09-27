import { Routes } from '@angular/router';

import { VacunasComponent } from './vacunas.component';
import { VacunasUpSertComponent } from './vacunas-upsert.component';
import { VacunasDetailsComponent } from './vacunas-details.component';

export const vacunasRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: VacunasComponent },
      { path: 'create', component: VacunasUpSertComponent },
      { path: ':id', component: VacunasDetailsComponent },
      { path: ':id/update', component: VacunasUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/vacunas/';

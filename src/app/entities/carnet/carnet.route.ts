import { Routes } from '@angular/router';

import { CarnetComponent } from './carnet.component';
import { CarnetUpSertComponent } from './carnet-upsert.component';
import { CarnetDetailsComponent } from './carnet-details.component';

export const carnetRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CarnetComponent },
      { path: 'create', component: CarnetUpSertComponent },
      { path: ':id', component: CarnetDetailsComponent },
      { path: ':id/update', component: CarnetUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/carnet/';

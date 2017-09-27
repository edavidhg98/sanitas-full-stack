import { Routes } from '@angular/router';

import { CargoAutomaticoComponent } from './cargo-automatico.component';
import { CargoAutomaticoUpSertComponent } from './cargo-automatico-upsert.component';
import { CargoAutomaticoDetailsComponent } from './cargo-automatico-details.component';

export const cargoAutomaticoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CargoAutomaticoComponent },
      { path: 'create', component: CargoAutomaticoUpSertComponent },
      { path: ':id', component: CargoAutomaticoDetailsComponent },
      { path: ':id/update', component: CargoAutomaticoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/cargo-automatico/';

import { Routes } from '@angular/router';

import { ValeElectronicoComponent } from './vale-electronico.component';
import { ValeElectronicoUpSertComponent } from './vale-electronico-upsert.component';
import { ValeElectronicoDetailsComponent } from './vale-electronico-details.component';

export const valeElectronicoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ValeElectronicoComponent },
      { path: 'create', component: ValeElectronicoUpSertComponent },
      { path: ':id', component: ValeElectronicoDetailsComponent },
      { path: ':id/update', component: ValeElectronicoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/vale-electronico/';

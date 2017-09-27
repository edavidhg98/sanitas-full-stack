import { Routes } from '@angular/router';

import { ReligionComponent } from './religion.component';
import { ReligionUpSertComponent } from './religion-upsert.component';
import { ReligionDetailsComponent } from './religion-details.component';

export const religionRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ReligionComponent },
      { path: 'create', component: ReligionUpSertComponent },
      { path: ':id', component: ReligionDetailsComponent },
      { path: ':id/update', component: ReligionUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/religion/';

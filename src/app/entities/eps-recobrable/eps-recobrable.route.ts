import { Routes } from '@angular/router';

import { EpsRecobrableComponent } from './eps-recobrable.component';
import { EpsRecobrableUpSertComponent } from './eps-recobrable-upsert.component';
import { EpsRecobrableDetailsComponent } from './eps-recobrable-details.component';

export const epsRecobrableRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EpsRecobrableComponent },
      { path: 'create', component: EpsRecobrableUpSertComponent },
      { path: ':id', component: EpsRecobrableDetailsComponent },
      { path: ':id/update', component: EpsRecobrableUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/eps-recobrable/';

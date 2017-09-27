import { Routes } from '@angular/router';

import { MotivoComponent } from './motivo.component';
import { MotivoUpSertComponent } from './motivo-upsert.component';
import { MotivoDetailsComponent } from './motivo-details.component';

export const motivoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MotivoComponent },
      { path: 'create', component: MotivoUpSertComponent },
      { path: ':id', component: MotivoDetailsComponent },
      { path: ':id/update', component: MotivoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/motivo/';

import { Routes } from '@angular/router';

import { PypProgramasComponent } from './pyp-programas.component';
import { PypProgramasUpSertComponent } from './pyp-programas-upsert.component';
import { PypProgramasDetailsComponent } from './pyp-programas-details.component';

export const pypProgramasRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PypProgramasComponent },
      { path: 'create', component: PypProgramasUpSertComponent },
      { path: ':id', component: PypProgramasDetailsComponent },
      { path: ':id/update', component: PypProgramasUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/pyp-programas/';

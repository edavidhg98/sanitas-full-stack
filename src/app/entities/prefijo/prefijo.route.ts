import { Routes } from '@angular/router';

import { PrefijoComponent } from './prefijo.component';
import { PrefijoUpSertComponent } from './prefijo-upsert.component';
import { PrefijoDetailsComponent } from './prefijo-details.component';

export const prefijoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PrefijoComponent },
      { path: 'create', component: PrefijoUpSertComponent },
      { path: ':id', component: PrefijoDetailsComponent },
      { path: ':id/update', component: PrefijoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/prefijo/';

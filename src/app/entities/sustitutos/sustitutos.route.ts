import { Routes } from '@angular/router';

import { SustitutosComponent } from './sustitutos.component';
import { SustitutosUpSertComponent } from './sustitutos-upsert.component';
import { SustitutosDetailsComponent } from './sustitutos-details.component';

export const sustitutosRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SustitutosComponent },
      { path: 'create', component: SustitutosUpSertComponent },
      { path: ':id', component: SustitutosDetailsComponent },
      { path: ':id/update', component: SustitutosUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/sustitutos/';

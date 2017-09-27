import { Routes } from '@angular/router';

import { SalarioComponent } from './salario.component';
import { SalarioUpSertComponent } from './salario-upsert.component';
import { SalarioDetailsComponent } from './salario-details.component';

export const salarioRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SalarioComponent },
      { path: 'create', component: SalarioUpSertComponent },
      { path: ':id', component: SalarioDetailsComponent },
      { path: ':id/update', component: SalarioUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/salario/';

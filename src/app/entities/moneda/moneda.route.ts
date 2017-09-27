import { Routes } from '@angular/router';

import { MonedaComponent } from './moneda.component';
import { MonedaUpSertComponent } from './moneda-upsert.component';
import { MonedaDetailsComponent } from './moneda-details.component';

export const monedaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MonedaComponent },
      { path: 'create', component: MonedaUpSertComponent },
      { path: ':id', component: MonedaDetailsComponent },
      { path: ':id/update', component: MonedaUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/moneda/';

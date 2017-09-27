import { Routes } from '@angular/router';

import { PrestadorCentroCostoUnicoComponent } from './prestador-centro-costo-unico.component';
import { PrestadorCentroCostoUnicoUpSertComponent } from './prestador-centro-costo-unico-upsert.component';
import { PrestadorCentroCostoUnicoDetailsComponent } from './prestador-centro-costo-unico-details.component';

export const prestadorCentroCostoUnicoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PrestadorCentroCostoUnicoComponent },
      { path: 'create', component: PrestadorCentroCostoUnicoUpSertComponent },
      { path: ':id', component: PrestadorCentroCostoUnicoDetailsComponent },
      { path: ':id/update', component: PrestadorCentroCostoUnicoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/prestador-centro-costo-unico/';

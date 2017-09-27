import { Routes } from '@angular/router';

import { ConcatenaConceptoPorCentroCostoComponent } from './concatena-concepto-por-centro-costo.component';
import { ConcatenaConceptoPorCentroCostoUpSertComponent } from './concatena-concepto-por-centro-costo-upsert.component';
import { ConcatenaConceptoPorCentroCostoDetailsComponent } from './concatena-concepto-por-centro-costo-details.component';

export const concatenaConceptoPorCentroCostoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ConcatenaConceptoPorCentroCostoComponent },
      { path: 'create', component: ConcatenaConceptoPorCentroCostoUpSertComponent },
      { path: ':id', component: ConcatenaConceptoPorCentroCostoDetailsComponent },
      { path: ':id/update', component: ConcatenaConceptoPorCentroCostoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/concatena-concepto-por-centro-costo/';

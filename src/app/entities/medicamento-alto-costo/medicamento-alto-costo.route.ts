import { Routes } from '@angular/router';

import { MedicamentoAltoCostoComponent } from './medicamento-alto-costo.component';
import { MedicamentoAltoCostoUpSertComponent } from './medicamento-alto-costo-upsert.component';
import { MedicamentoAltoCostoDetailsComponent } from './medicamento-alto-costo-details.component';

export const medicamentoAltoCostoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: MedicamentoAltoCostoComponent },
      { path: 'create', component: MedicamentoAltoCostoUpSertComponent },
      { path: ':id', component: MedicamentoAltoCostoDetailsComponent },
      { path: ':id/update', component: MedicamentoAltoCostoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/medicamento-alto-costo/';

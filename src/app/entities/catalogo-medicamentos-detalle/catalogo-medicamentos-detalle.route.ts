import { Routes } from '@angular/router';

import { CatalogoMedicamentosDetalleComponent } from './catalogo-medicamentos-detalle.component';
import { CatalogoMedicamentosDetalleUpSertComponent } from './catalogo-medicamentos-detalle-upsert.component';
import { CatalogoMedicamentosDetalleDetailsComponent } from './catalogo-medicamentos-detalle-details.component';

export const catalogoMedicamentosDetalleRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CatalogoMedicamentosDetalleComponent },
      { path: 'create', component: CatalogoMedicamentosDetalleUpSertComponent },
      { path: ':id', component: CatalogoMedicamentosDetalleDetailsComponent },
      { path: ':id/update', component: CatalogoMedicamentosDetalleUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/catalogo-medicamentos-detalle/';

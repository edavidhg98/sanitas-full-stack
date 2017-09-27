import { Routes } from '@angular/router';

import { CatalogoMedicamentosComponent } from './catalogo-medicamentos.component';
import { CatalogoMedicamentosUpSertComponent } from './catalogo-medicamentos-upsert.component';
import { CatalogoMedicamentosDetailsComponent } from './catalogo-medicamentos-details.component';

export const catalogoMedicamentosRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: CatalogoMedicamentosComponent },
      { path: 'create', component: CatalogoMedicamentosUpSertComponent },
      { path: ':id', component: CatalogoMedicamentosDetailsComponent },
      { path: ':id/update', component: CatalogoMedicamentosUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/catalogo-medicamentos/';

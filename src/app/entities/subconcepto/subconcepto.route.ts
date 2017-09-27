import { Routes } from '@angular/router';

import { SubconceptoComponent } from './subconcepto.component';
import { SubconceptoUpSertComponent } from './subconcepto-upsert.component';
import { SubconceptoDetailsComponent } from './subconcepto-details.component';

export const subconceptoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SubconceptoComponent },
      { path: 'create', component: SubconceptoUpSertComponent },
      { path: ':id', component: SubconceptoDetailsComponent },
      { path: ':id/update', component: SubconceptoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/subconcepto/';

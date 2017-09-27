import { Routes } from '@angular/router';

import { ConsumoSoatOtraIpsComponent } from './consumo-soat-otra-ips.component';
import { ConsumoSoatOtraIpsUpSertComponent } from './consumo-soat-otra-ips-upsert.component';
import { ConsumoSoatOtraIpsDetailsComponent } from './consumo-soat-otra-ips-details.component';

export const consumoSoatOtraIpsRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ConsumoSoatOtraIpsComponent },
      { path: 'create', component: ConsumoSoatOtraIpsUpSertComponent },
      { path: ':id', component: ConsumoSoatOtraIpsDetailsComponent },
      { path: ':id/update', component: ConsumoSoatOtraIpsUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/consumo-soat-otra-ips/';

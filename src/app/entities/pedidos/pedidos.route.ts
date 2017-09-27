import { Routes } from '@angular/router';

import { PedidosComponent } from './pedidos.component';
import { PedidosUpSertComponent } from './pedidos-upsert.component';
import { PedidosDetailsComponent } from './pedidos-details.component';

export const pedidosRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PedidosComponent },
      { path: 'create', component: PedidosUpSertComponent },
      { path: ':id', component: PedidosDetailsComponent },
      { path: ':id/update', component: PedidosUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/pedidos/';

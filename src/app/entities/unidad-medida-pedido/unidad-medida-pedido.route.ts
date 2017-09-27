import { Routes } from '@angular/router';

import { UnidadMedidaPedidoComponent } from './unidad-medida-pedido.component';
import { UnidadMedidaPedidoUpSertComponent } from './unidad-medida-pedido-upsert.component';
import { UnidadMedidaPedidoDetailsComponent } from './unidad-medida-pedido-details.component';

export const unidadMedidaPedidoRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UnidadMedidaPedidoComponent },
      { path: 'create', component: UnidadMedidaPedidoUpSertComponent },
      { path: ':id', component: UnidadMedidaPedidoDetailsComponent },
      { path: ':id/update', component: UnidadMedidaPedidoUpSertComponent }
    ]
  }
];

export const absolutePath = '/entities/unidad-medida-pedido/';

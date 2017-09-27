import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PedidosSharedModule } from '../pedidos/pedidos-shared.module';

import { PrioridadSharedModule } from '../prioridad/prioridad-shared.module';
import { SucursalSharedModule } from '../sucursal/sucursal-shared.module';

import { PedidosComponent } from './pedidos.component';
import { PedidosUpSertComponent } from './pedidos-upsert.component';
import { PedidosDetailsComponent } from './pedidos-details.component';
import { PedidosService } from './pedidos.service';

import { pedidosRoutes } from './pedidos.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pedidosRoutes),
    EntitiesSharedModule,
    PedidosSharedModule,    
    PrioridadSharedModule,    
    SucursalSharedModule    
  ],
  declarations: [
    PedidosComponent,
    PedidosUpSertComponent,
    PedidosDetailsComponent
  ],
  providers: [ PedidosService ]
})
export class PedidosModule { }

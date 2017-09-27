import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { UnidadMedidaPedidoSharedModule } from '../unidad-medida-pedido/unidad-medida-pedido-shared.module';

import { ProductoSharedModule } from '../producto/producto-shared.module';

import { UnidadMedidaPedidoComponent } from './unidad-medida-pedido.component';
import { UnidadMedidaPedidoUpSertComponent } from './unidad-medida-pedido-upsert.component';
import { UnidadMedidaPedidoDetailsComponent } from './unidad-medida-pedido-details.component';
import { UnidadMedidaPedidoService } from './unidad-medida-pedido.service';

import { unidadMedidaPedidoRoutes } from './unidad-medida-pedido.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(unidadMedidaPedidoRoutes),
    EntitiesSharedModule,
    UnidadMedidaPedidoSharedModule,    
    ProductoSharedModule    
  ],
  declarations: [
    UnidadMedidaPedidoComponent,
    UnidadMedidaPedidoUpSertComponent,
    UnidadMedidaPedidoDetailsComponent
  ],
  providers: [ UnidadMedidaPedidoService ]
})
export class UnidadMedidaPedidoModule { }

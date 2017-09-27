import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { UnidadMedidaPedidoListComponent } from './unidad-medida-pedido-list.component';
import { UnidadMedidaPedidoService } from './unidad-medida-pedido.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    UnidadMedidaPedidoListComponent
  ],
  declarations: [
    UnidadMedidaPedidoListComponent
  ],
  providers: [UnidadMedidaPedidoService]
})
export class UnidadMedidaPedidoSharedModule { }

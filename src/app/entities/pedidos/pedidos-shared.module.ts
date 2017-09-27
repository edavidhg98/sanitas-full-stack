import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PedidosListComponent } from './pedidos-list.component';
import { PedidosService } from './pedidos.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PedidosListComponent
  ],
  declarations: [
    PedidosListComponent
  ],
  providers: [PedidosService]
})
export class PedidosSharedModule { }

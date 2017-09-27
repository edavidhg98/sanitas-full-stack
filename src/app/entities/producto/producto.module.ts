import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ProductoSharedModule } from '../producto/producto-shared.module';

import { MedicamentoAltoCostoSharedModule } from '../medicamento-alto-costo/medicamento-alto-costo-shared.module';
import { UnidadMedidaPedidoSharedModule } from '../unidad-medida-pedido/unidad-medida-pedido-shared.module';
import { SustitutosSharedModule } from '../sustitutos/sustitutos-shared.module';
import { ExcepcionProductoSharedModule } from '../excepcion-producto/excepcion-producto-shared.module';

import { ProductoComponent } from './producto.component';
import { ProductoUpSertComponent } from './producto-upsert.component';
import { ProductoDetailsComponent } from './producto-details.component';
import { ProductoService } from './producto.service';

import { productoRoutes } from './producto.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(productoRoutes),
    EntitiesSharedModule,
    ProductoSharedModule,    
    MedicamentoAltoCostoSharedModule,    
    UnidadMedidaPedidoSharedModule,    
    SustitutosSharedModule,    
    ExcepcionProductoSharedModule    
  ],
  declarations: [
    ProductoComponent,
    ProductoUpSertComponent,
    ProductoDetailsComponent
  ],
  providers: [ ProductoService ]
})
export class ProductoModule { }

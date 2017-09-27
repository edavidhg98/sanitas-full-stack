import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { ExcepcionProductoSharedModule } from '../excepcion-producto/excepcion-producto-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';
import { PrestadorSharedModule } from '../prestador/prestador-shared.module';
import { ProductoSharedModule } from '../producto/producto-shared.module';

import { ExcepcionProductoComponent } from './excepcion-producto.component';
import { ExcepcionProductoUpSertComponent } from './excepcion-producto-upsert.component';
import { ExcepcionProductoDetailsComponent } from './excepcion-producto-details.component';
import { ExcepcionProductoService } from './excepcion-producto.service';

import { excepcionProductoRoutes } from './excepcion-producto.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(excepcionProductoRoutes),
    EntitiesSharedModule,
    ExcepcionProductoSharedModule,    
    EntidadSharedModule,    
    PrestadorSharedModule,    
    ProductoSharedModule    
  ],
  declarations: [
    ExcepcionProductoComponent,
    ExcepcionProductoUpSertComponent,
    ExcepcionProductoDetailsComponent
  ],
  providers: [ ExcepcionProductoService ]
})
export class ExcepcionProductoModule { }

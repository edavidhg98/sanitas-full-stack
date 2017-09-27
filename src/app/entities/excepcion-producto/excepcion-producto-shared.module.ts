import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ExcepcionProductoListComponent } from './excepcion-producto-list.component';
import { ExcepcionProductoService } from './excepcion-producto.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ExcepcionProductoListComponent
  ],
  declarations: [
    ExcepcionProductoListComponent
  ],
  providers: [ExcepcionProductoService]
})
export class ExcepcionProductoSharedModule { }

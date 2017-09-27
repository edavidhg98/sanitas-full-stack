import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EncabezadoResultadoListComponent } from './encabezado-resultado-list.component';
import { EncabezadoResultadoService } from './encabezado-resultado.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EncabezadoResultadoListComponent
  ],
  declarations: [
    EncabezadoResultadoListComponent
  ],
  providers: [EncabezadoResultadoService]
})
export class EncabezadoResultadoSharedModule { }

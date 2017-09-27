import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { TiposDocumentoEntidadListComponent } from './tipos-documento-entidad-list.component';
import { TiposDocumentoEntidadService } from './tipos-documento-entidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    TiposDocumentoEntidadListComponent
  ],
  declarations: [
    TiposDocumentoEntidadListComponent
  ],
  providers: [TiposDocumentoEntidadService]
})
export class TiposDocumentoEntidadSharedModule { }

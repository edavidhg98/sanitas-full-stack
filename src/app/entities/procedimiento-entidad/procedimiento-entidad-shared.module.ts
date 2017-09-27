import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientoEntidadListComponent } from './procedimiento-entidad-list.component';
import { ProcedimientoEntidadService } from './procedimiento-entidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientoEntidadListComponent
  ],
  declarations: [
    ProcedimientoEntidadListComponent
  ],
  providers: [ProcedimientoEntidadService]
})
export class ProcedimientoEntidadSharedModule { }

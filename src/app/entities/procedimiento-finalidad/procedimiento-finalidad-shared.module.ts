import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientoFinalidadListComponent } from './procedimiento-finalidad-list.component';
import { ProcedimientoFinalidadService } from './procedimiento-finalidad.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientoFinalidadListComponent
  ],
  declarations: [
    ProcedimientoFinalidadListComponent
  ],
  providers: [ProcedimientoFinalidadService]
})
export class ProcedimientoFinalidadSharedModule { }

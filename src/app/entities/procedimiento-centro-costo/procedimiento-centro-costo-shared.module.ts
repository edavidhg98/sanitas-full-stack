import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientoCentroCostoListComponent } from './procedimiento-centro-costo-list.component';
import { ProcedimientoCentroCostoService } from './procedimiento-centro-costo.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientoCentroCostoListComponent
  ],
  declarations: [
    ProcedimientoCentroCostoListComponent
  ],
  providers: [ProcedimientoCentroCostoService]
})
export class ProcedimientoCentroCostoSharedModule { }

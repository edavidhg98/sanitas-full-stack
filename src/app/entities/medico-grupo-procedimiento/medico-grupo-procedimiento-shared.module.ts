import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { MedicoGrupoProcedimientoListComponent } from './medico-grupo-procedimiento-list.component';
import { MedicoGrupoProcedimientoService } from './medico-grupo-procedimiento.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    MedicoGrupoProcedimientoListComponent
  ],
  declarations: [
    MedicoGrupoProcedimientoListComponent
  ],
  providers: [MedicoGrupoProcedimientoService]
})
export class MedicoGrupoProcedimientoSharedModule { }

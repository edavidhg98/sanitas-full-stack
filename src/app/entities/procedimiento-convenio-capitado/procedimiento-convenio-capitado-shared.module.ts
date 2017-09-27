import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { ProcedimientoConvenioCapitadoListComponent } from './procedimiento-convenio-capitado-list.component';
import { ProcedimientoConvenioCapitadoService } from './procedimiento-convenio-capitado.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    ProcedimientoConvenioCapitadoListComponent
  ],
  declarations: [
    ProcedimientoConvenioCapitadoListComponent
  ],
  providers: [ProcedimientoConvenioCapitadoService]
})
export class ProcedimientoConvenioCapitadoSharedModule { }

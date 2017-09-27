import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { PacienteInconsistenciasListComponent } from './paciente-inconsistencias-list.component';
import { PacienteInconsistenciasService } from './paciente-inconsistencias.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    PacienteInconsistenciasListComponent
  ],
  declarations: [
    PacienteInconsistenciasListComponent
  ],
  providers: [PacienteInconsistenciasService]
})
export class PacienteInconsistenciasSharedModule { }

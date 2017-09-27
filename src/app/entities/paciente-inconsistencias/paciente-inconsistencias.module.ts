import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { PacienteInconsistenciasSharedModule } from '../paciente-inconsistencias/paciente-inconsistencias-shared.module';

import { EntidadSharedModule } from '../entidad/entidad-shared.module';

import { PacienteInconsistenciasComponent } from './paciente-inconsistencias.component';
import { PacienteInconsistenciasUpSertComponent } from './paciente-inconsistencias-upsert.component';
import { PacienteInconsistenciasDetailsComponent } from './paciente-inconsistencias-details.component';
import { PacienteInconsistenciasService } from './paciente-inconsistencias.service';

import { pacienteInconsistenciasRoutes } from './paciente-inconsistencias.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pacienteInconsistenciasRoutes),
    EntitiesSharedModule,
    PacienteInconsistenciasSharedModule,    
    EntidadSharedModule    
  ],
  declarations: [
    PacienteInconsistenciasComponent,
    PacienteInconsistenciasUpSertComponent,
    PacienteInconsistenciasDetailsComponent
  ],
  providers: [ PacienteInconsistenciasService ]
})
export class PacienteInconsistenciasModule { }

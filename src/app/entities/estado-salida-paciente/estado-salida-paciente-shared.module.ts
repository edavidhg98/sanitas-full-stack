import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';

import { EstadoSalidaPacienteListComponent } from './estado-salida-paciente-list.component';
import { EstadoSalidaPacienteService } from './estado-salida-paciente.service';

@NgModule({
  imports: [
    CommonModule,
    EntitiesSharedModule,
    RouterModule
  ],
  exports: [
    EstadoSalidaPacienteListComponent
  ],
  declarations: [
    EstadoSalidaPacienteListComponent
  ],
  providers: [EstadoSalidaPacienteService]
})
export class EstadoSalidaPacienteSharedModule { }

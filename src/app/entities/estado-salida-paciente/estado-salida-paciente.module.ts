import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntitiesSharedModule } from '../entities-shared.module';
import { EstadoSalidaPacienteSharedModule } from '../estado-salida-paciente/estado-salida-paciente-shared.module';


import { EstadoSalidaPacienteComponent } from './estado-salida-paciente.component';
import { EstadoSalidaPacienteUpSertComponent } from './estado-salida-paciente-upsert.component';
import { EstadoSalidaPacienteDetailsComponent } from './estado-salida-paciente-details.component';
import { EstadoSalidaPacienteService } from './estado-salida-paciente.service';

import { estadoSalidaPacienteRoutes } from './estado-salida-paciente.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(estadoSalidaPacienteRoutes),
    EntitiesSharedModule,
    EstadoSalidaPacienteSharedModule    
  ],
  declarations: [
    EstadoSalidaPacienteComponent,
    EstadoSalidaPacienteUpSertComponent,
    EstadoSalidaPacienteDetailsComponent
  ],
  providers: [ EstadoSalidaPacienteService ]
})
export class EstadoSalidaPacienteModule { }

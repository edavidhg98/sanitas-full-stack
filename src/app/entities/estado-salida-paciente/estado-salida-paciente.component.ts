import { Component, OnInit, Inject } from '@angular/core';

import { EstadoSalidaPacienteService } from './estado-salida-paciente.service';
import { EstadoSalidaPaciente } from './estado-salida-paciente.model';

@Component({
  selector: 'app-estado-salida-paciente',
  template: `
              <div class="container-fluid">
                <app-estado-salida-paciente-list [estadoSalidaPacientes]="estadoSalidaPacientes"></app-estado-salida-paciente-list>
              </div>
            `
})
export class EstadoSalidaPacienteComponent implements OnInit {

  estadoSalidaPacientes: EstadoSalidaPaciente[] = [];

  constructor(private estadoSalidaPacienteService: EstadoSalidaPacienteService) {

  }

  ngOnInit() {
    this.estadoSalidaPacienteService.getAll().subscribe(estadoSalidaPacientes => this.estadoSalidaPacientes = estadoSalidaPacientes);
  }
}

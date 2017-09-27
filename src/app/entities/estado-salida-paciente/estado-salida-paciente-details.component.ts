import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EstadoSalidaPaciente } from './estado-salida-paciente.model';
import { EstadoSalidaPacienteService } from './estado-salida-paciente.service';

@Component({
  selector: 'app-estado-salida-paciente-details',
  templateUrl: './estado-salida-paciente-details.component.html'
})
export class EstadoSalidaPacienteDetailsComponent implements OnInit {

  estadoSalidaPaciente: EstadoSalidaPaciente;

    constructor(
      private estadoSalidaPacienteService: EstadoSalidaPacienteService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.estadoSalidaPacienteService.getById(id).subscribe(estadoSalidaPaciente => this.estadoSalidaPaciente = estadoSalidaPaciente);
      });
    }
  }

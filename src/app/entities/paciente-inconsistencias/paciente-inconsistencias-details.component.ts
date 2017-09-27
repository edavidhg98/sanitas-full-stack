import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PacienteInconsistencias } from './paciente-inconsistencias.model';
import { PacienteInconsistenciasService } from './paciente-inconsistencias.service';

@Component({
  selector: 'app-paciente-inconsistencias-details',
  templateUrl: './paciente-inconsistencias-details.component.html'
})
export class PacienteInconsistenciasDetailsComponent implements OnInit {

  pacienteInconsistencias: PacienteInconsistencias;

    constructor(
      private pacienteInconsistenciasService: PacienteInconsistenciasService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.pacienteInconsistenciasService.getById(id).subscribe(pacienteInconsistencias => this.pacienteInconsistencias = pacienteInconsistencias);
      });
    }
  }

import { Component, OnInit, Inject } from '@angular/core';

import { PacienteInconsistenciasService } from './paciente-inconsistencias.service';
import { PacienteInconsistencias } from './paciente-inconsistencias.model';

@Component({
  selector: 'app-paciente-inconsistencias',
  template: `
              <div class="container-fluid">
                <app-paciente-inconsistencias-list [pacienteInconsistenciass]="pacienteInconsistenciass"></app-paciente-inconsistencias-list>
              </div>
            `
})
export class PacienteInconsistenciasComponent implements OnInit {

  pacienteInconsistenciass: PacienteInconsistencias[] = [];

  constructor(private pacienteInconsistenciasService: PacienteInconsistenciasService) {

  }

  ngOnInit() {
    this.pacienteInconsistenciasService.getAll().subscribe(pacienteInconsistenciass => this.pacienteInconsistenciass = pacienteInconsistenciass);
  }
}

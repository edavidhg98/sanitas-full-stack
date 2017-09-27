import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientoConvenioCapitadoService } from './procedimiento-convenio-capitado.service';
import { ProcedimientoConvenioCapitado } from './procedimiento-convenio-capitado.model';

@Component({
  selector: 'app-procedimiento-convenio-capitado',
  template: `
              <div class="container-fluid">
                <app-procedimiento-convenio-capitado-list [procedimientoConvenioCapitados]="procedimientoConvenioCapitados"></app-procedimiento-convenio-capitado-list>
              </div>
            `
})
export class ProcedimientoConvenioCapitadoComponent implements OnInit {

  procedimientoConvenioCapitados: ProcedimientoConvenioCapitado[] = [];

  constructor(private procedimientoConvenioCapitadoService: ProcedimientoConvenioCapitadoService) {

  }

  ngOnInit() {
    this.procedimientoConvenioCapitadoService.getAll().subscribe(procedimientoConvenioCapitados => this.procedimientoConvenioCapitados = procedimientoConvenioCapitados);
  }
}

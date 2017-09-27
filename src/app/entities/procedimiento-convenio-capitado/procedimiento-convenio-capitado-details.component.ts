import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedimientoConvenioCapitado } from './procedimiento-convenio-capitado.model';
import { ProcedimientoConvenioCapitadoService } from './procedimiento-convenio-capitado.service';

@Component({
  selector: 'app-procedimiento-convenio-capitado-details',
  templateUrl: './procedimiento-convenio-capitado-details.component.html'
})
export class ProcedimientoConvenioCapitadoDetailsComponent implements OnInit {

  procedimientoConvenioCapitado: ProcedimientoConvenioCapitado;

    constructor(
      private procedimientoConvenioCapitadoService: ProcedimientoConvenioCapitadoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientoConvenioCapitadoService.getById(id).subscribe(procedimientoConvenioCapitado => this.procedimientoConvenioCapitado = procedimientoConvenioCapitado);
      });
    }
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedimientoFinalidad } from './procedimiento-finalidad.model';
import { ProcedimientoFinalidadService } from './procedimiento-finalidad.service';

@Component({
  selector: 'app-procedimiento-finalidad-details',
  templateUrl: './procedimiento-finalidad-details.component.html'
})
export class ProcedimientoFinalidadDetailsComponent implements OnInit {

  procedimientoFinalidad: ProcedimientoFinalidad;

    constructor(
      private procedimientoFinalidadService: ProcedimientoFinalidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientoFinalidadService.getById(id).subscribe(procedimientoFinalidad => this.procedimientoFinalidad = procedimientoFinalidad);
      });
    }
  }

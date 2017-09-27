import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedimientoEntidad } from './procedimiento-entidad.model';
import { ProcedimientoEntidadService } from './procedimiento-entidad.service';

@Component({
  selector: 'app-procedimiento-entidad-details',
  templateUrl: './procedimiento-entidad-details.component.html'
})
export class ProcedimientoEntidadDetailsComponent implements OnInit {

  procedimientoEntidad: ProcedimientoEntidad;

    constructor(
      private procedimientoEntidadService: ProcedimientoEntidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientoEntidadService.getById(id).subscribe(procedimientoEntidad => this.procedimientoEntidad = procedimientoEntidad);
      });
    }
  }

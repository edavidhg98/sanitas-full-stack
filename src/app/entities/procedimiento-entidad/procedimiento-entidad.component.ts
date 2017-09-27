import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientoEntidadService } from './procedimiento-entidad.service';
import { ProcedimientoEntidad } from './procedimiento-entidad.model';

@Component({
  selector: 'app-procedimiento-entidad',
  template: `
              <div class="container-fluid">
                <app-procedimiento-entidad-list [procedimientoEntidads]="procedimientoEntidads"></app-procedimiento-entidad-list>
              </div>
            `
})
export class ProcedimientoEntidadComponent implements OnInit {

  procedimientoEntidads: ProcedimientoEntidad[] = [];

  constructor(private procedimientoEntidadService: ProcedimientoEntidadService) {

  }

  ngOnInit() {
    this.procedimientoEntidadService.getAll().subscribe(procedimientoEntidads => this.procedimientoEntidads = procedimientoEntidads);
  }
}

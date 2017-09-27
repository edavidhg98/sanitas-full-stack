import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientoFinalidadService } from './procedimiento-finalidad.service';
import { ProcedimientoFinalidad } from './procedimiento-finalidad.model';

@Component({
  selector: 'app-procedimiento-finalidad',
  template: `
              <div class="container-fluid">
                <app-procedimiento-finalidad-list [procedimientoFinalidads]="procedimientoFinalidads"></app-procedimiento-finalidad-list>
              </div>
            `
})
export class ProcedimientoFinalidadComponent implements OnInit {

  procedimientoFinalidads: ProcedimientoFinalidad[] = [];

  constructor(private procedimientoFinalidadService: ProcedimientoFinalidadService) {

  }

  ngOnInit() {
    this.procedimientoFinalidadService.getAll().subscribe(procedimientoFinalidads => this.procedimientoFinalidads = procedimientoFinalidads);
  }
}

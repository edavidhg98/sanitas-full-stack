import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientoCentroCostoService } from './procedimiento-centro-costo.service';
import { ProcedimientoCentroCosto } from './procedimiento-centro-costo.model';

@Component({
  selector: 'app-procedimiento-centro-costo',
  template: `
              <div class="container-fluid">
                <app-procedimiento-centro-costo-list [procedimientoCentroCostos]="procedimientoCentroCostos"></app-procedimiento-centro-costo-list>
              </div>
            `
})
export class ProcedimientoCentroCostoComponent implements OnInit {

  procedimientoCentroCostos: ProcedimientoCentroCosto[] = [];

  constructor(private procedimientoCentroCostoService: ProcedimientoCentroCostoService) {

  }

  ngOnInit() {
    this.procedimientoCentroCostoService.getAll().subscribe(procedimientoCentroCostos => this.procedimientoCentroCostos = procedimientoCentroCostos);
  }
}

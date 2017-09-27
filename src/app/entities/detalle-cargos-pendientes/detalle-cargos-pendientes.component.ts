import { Component, OnInit, Inject } from '@angular/core';

import { DetalleCargosPendientesService } from './detalle-cargos-pendientes.service';
import { DetalleCargosPendientes } from './detalle-cargos-pendientes.model';

@Component({
  selector: 'app-detalle-cargos-pendientes',
  template: `
              <div class="container-fluid">
                <app-detalle-cargos-pendientes-list [detalleCargosPendientess]="detalleCargosPendientess"></app-detalle-cargos-pendientes-list>
              </div>
            `
})
export class DetalleCargosPendientesComponent implements OnInit {

  detalleCargosPendientess: DetalleCargosPendientes[] = [];

  constructor(private detalleCargosPendientesService: DetalleCargosPendientesService) {

  }

  ngOnInit() {
    this.detalleCargosPendientesService.getAll().subscribe(detalleCargosPendientess => this.detalleCargosPendientess = detalleCargosPendientess);
  }
}

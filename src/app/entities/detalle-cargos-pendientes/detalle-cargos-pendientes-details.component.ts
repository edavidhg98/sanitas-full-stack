import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetalleCargosPendientes } from './detalle-cargos-pendientes.model';
import { DetalleCargosPendientesService } from './detalle-cargos-pendientes.service';

@Component({
  selector: 'app-detalle-cargos-pendientes-details',
  templateUrl: './detalle-cargos-pendientes-details.component.html'
})
export class DetalleCargosPendientesDetailsComponent implements OnInit {

  detalleCargosPendientes: DetalleCargosPendientes;

    constructor(
      private detalleCargosPendientesService: DetalleCargosPendientesService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.detalleCargosPendientesService.getById(id).subscribe(detalleCargosPendientes => this.detalleCargosPendientes = detalleCargosPendientes);
      });
    }
  }

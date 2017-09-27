import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CargosPendientes } from './cargos-pendientes.model';
import { CargosPendientesService } from './cargos-pendientes.service';

@Component({
  selector: 'app-cargos-pendientes-details',
  templateUrl: './cargos-pendientes-details.component.html'
})
export class CargosPendientesDetailsComponent implements OnInit {

  cargosPendientes: CargosPendientes;

    constructor(
      private cargosPendientesService: CargosPendientesService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.cargosPendientesService.getById(id).subscribe(cargosPendientes => this.cargosPendientes = cargosPendientes);
      });
    }
  }

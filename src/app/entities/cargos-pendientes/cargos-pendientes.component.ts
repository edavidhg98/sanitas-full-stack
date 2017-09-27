import { Component, OnInit, Inject } from '@angular/core';

import { CargosPendientesService } from './cargos-pendientes.service';
import { CargosPendientes } from './cargos-pendientes.model';

@Component({
  selector: 'app-cargos-pendientes',
  template: `
              <div class="container-fluid">
                <app-cargos-pendientes-list [cargosPendientess]="cargosPendientess"></app-cargos-pendientes-list>
              </div>
            `
})
export class CargosPendientesComponent implements OnInit {

  cargosPendientess: CargosPendientes[] = [];

  constructor(private cargosPendientesService: CargosPendientesService) {

  }

  ngOnInit() {
    this.cargosPendientesService.getAll().subscribe(cargosPendientess => this.cargosPendientess = cargosPendientess);
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { CargoAutomaticoService } from './cargo-automatico.service';
import { CargoAutomatico } from './cargo-automatico.model';

@Component({
  selector: 'app-cargo-automatico',
  template: `
              <div class="container-fluid">
                <app-cargo-automatico-list [cargoAutomaticos]="cargoAutomaticos"></app-cargo-automatico-list>
              </div>
            `
})
export class CargoAutomaticoComponent implements OnInit {

  cargoAutomaticos: CargoAutomatico[] = [];

  constructor(private cargoAutomaticoService: CargoAutomaticoService) {

  }

  ngOnInit() {
    this.cargoAutomaticoService.getAll().subscribe(cargoAutomaticos => this.cargoAutomaticos = cargoAutomaticos);
  }
}

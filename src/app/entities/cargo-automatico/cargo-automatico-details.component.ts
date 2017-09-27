import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CargoAutomatico } from './cargo-automatico.model';
import { CargoAutomaticoService } from './cargo-automatico.service';

@Component({
  selector: 'app-cargo-automatico-details',
  templateUrl: './cargo-automatico-details.component.html'
})
export class CargoAutomaticoDetailsComponent implements OnInit {

  cargoAutomatico: CargoAutomatico;

    constructor(
      private cargoAutomaticoService: CargoAutomaticoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.cargoAutomaticoService.getById(id).subscribe(cargoAutomatico => this.cargoAutomatico = cargoAutomatico);
      });
    }
  }

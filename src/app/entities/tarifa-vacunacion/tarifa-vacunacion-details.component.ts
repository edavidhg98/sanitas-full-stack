import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TarifaVacunacion } from './tarifa-vacunacion.model';
import { TarifaVacunacionService } from './tarifa-vacunacion.service';

@Component({
  selector: 'app-tarifa-vacunacion-details',
  templateUrl: './tarifa-vacunacion-details.component.html'
})
export class TarifaVacunacionDetailsComponent implements OnInit {

  tarifaVacunacion: TarifaVacunacion;

    constructor(
      private tarifaVacunacionService: TarifaVacunacionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tarifaVacunacionService.getById(id).subscribe(tarifaVacunacion => this.tarifaVacunacion = tarifaVacunacion);
      });
    }
  }

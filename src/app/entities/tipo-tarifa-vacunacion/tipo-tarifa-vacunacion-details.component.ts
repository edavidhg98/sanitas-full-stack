import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoTarifaVacunacion } from './tipo-tarifa-vacunacion.model';
import { TipoTarifaVacunacionService } from './tipo-tarifa-vacunacion.service';

@Component({
  selector: 'app-tipo-tarifa-vacunacion-details',
  templateUrl: './tipo-tarifa-vacunacion-details.component.html'
})
export class TipoTarifaVacunacionDetailsComponent implements OnInit {

  tipoTarifaVacunacion: TipoTarifaVacunacion;

    constructor(
      private tipoTarifaVacunacionService: TipoTarifaVacunacionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoTarifaVacunacionService.getById(id).subscribe(tipoTarifaVacunacion => this.tipoTarifaVacunacion = tipoTarifaVacunacion);
      });
    }
  }

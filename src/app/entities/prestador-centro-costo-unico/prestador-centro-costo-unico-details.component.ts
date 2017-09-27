import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PrestadorCentroCostoUnico } from './prestador-centro-costo-unico.model';
import { PrestadorCentroCostoUnicoService } from './prestador-centro-costo-unico.service';

@Component({
  selector: 'app-prestador-centro-costo-unico-details',
  templateUrl: './prestador-centro-costo-unico-details.component.html'
})
export class PrestadorCentroCostoUnicoDetailsComponent implements OnInit {

  prestadorCentroCostoUnico: PrestadorCentroCostoUnico;

    constructor(
      private prestadorCentroCostoUnicoService: PrestadorCentroCostoUnicoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.prestadorCentroCostoUnicoService.getById(id).subscribe(prestadorCentroCostoUnico => this.prestadorCentroCostoUnico = prestadorCentroCostoUnico);
      });
    }
  }

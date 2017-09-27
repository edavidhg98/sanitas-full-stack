import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConcatenaConceptoPorCentroCosto } from './concatena-concepto-por-centro-costo.model';
import { ConcatenaConceptoPorCentroCostoService } from './concatena-concepto-por-centro-costo.service';

@Component({
  selector: 'app-concatena-concepto-por-centro-costo-details',
  templateUrl: './concatena-concepto-por-centro-costo-details.component.html'
})
export class ConcatenaConceptoPorCentroCostoDetailsComponent implements OnInit {

  concatenaConceptoPorCentroCosto: ConcatenaConceptoPorCentroCosto;

    constructor(
      private concatenaConceptoPorCentroCostoService: ConcatenaConceptoPorCentroCostoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.concatenaConceptoPorCentroCostoService.getById(id).subscribe(concatenaConceptoPorCentroCosto => this.concatenaConceptoPorCentroCosto = concatenaConceptoPorCentroCosto);
      });
    }
  }

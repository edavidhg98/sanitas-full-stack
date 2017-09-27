import { Component, OnInit, Inject } from '@angular/core';

import { ConcatenaConceptoPorCentroCostoService } from './concatena-concepto-por-centro-costo.service';
import { ConcatenaConceptoPorCentroCosto } from './concatena-concepto-por-centro-costo.model';

@Component({
  selector: 'app-concatena-concepto-por-centro-costo',
  template: `
              <div class="container-fluid">
                <app-concatena-concepto-por-centro-costo-list [concatenaConceptoPorCentroCostos]="concatenaConceptoPorCentroCostos"></app-concatena-concepto-por-centro-costo-list>
              </div>
            `
})
export class ConcatenaConceptoPorCentroCostoComponent implements OnInit {

  concatenaConceptoPorCentroCostos: ConcatenaConceptoPorCentroCosto[] = [];

  constructor(private concatenaConceptoPorCentroCostoService: ConcatenaConceptoPorCentroCostoService) {

  }

  ngOnInit() {
    this.concatenaConceptoPorCentroCostoService.getAll().subscribe(concatenaConceptoPorCentroCostos => this.concatenaConceptoPorCentroCostos = concatenaConceptoPorCentroCostos);
  }
}

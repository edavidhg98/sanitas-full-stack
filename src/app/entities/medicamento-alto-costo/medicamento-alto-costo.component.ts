import { Component, OnInit, Inject } from '@angular/core';

import { MedicamentoAltoCostoService } from './medicamento-alto-costo.service';
import { MedicamentoAltoCosto } from './medicamento-alto-costo.model';

@Component({
  selector: 'app-medicamento-alto-costo',
  template: `
              <div class="container-fluid">
                <app-medicamento-alto-costo-list [medicamentoAltoCostos]="medicamentoAltoCostos"></app-medicamento-alto-costo-list>
              </div>
            `
})
export class MedicamentoAltoCostoComponent implements OnInit {

  medicamentoAltoCostos: MedicamentoAltoCosto[] = [];

  constructor(private medicamentoAltoCostoService: MedicamentoAltoCostoService) {

  }

  ngOnInit() {
    this.medicamentoAltoCostoService.getAll().subscribe(medicamentoAltoCostos => this.medicamentoAltoCostos = medicamentoAltoCostos);
  }
}

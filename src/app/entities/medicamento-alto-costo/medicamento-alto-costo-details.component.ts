import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedicamentoAltoCosto } from './medicamento-alto-costo.model';
import { MedicamentoAltoCostoService } from './medicamento-alto-costo.service';

@Component({
  selector: 'app-medicamento-alto-costo-details',
  templateUrl: './medicamento-alto-costo-details.component.html'
})
export class MedicamentoAltoCostoDetailsComponent implements OnInit {

  medicamentoAltoCosto: MedicamentoAltoCosto;

    constructor(
      private medicamentoAltoCostoService: MedicamentoAltoCostoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.medicamentoAltoCostoService.getById(id).subscribe(medicamentoAltoCosto => this.medicamentoAltoCosto = medicamentoAltoCosto);
      });
    }
  }

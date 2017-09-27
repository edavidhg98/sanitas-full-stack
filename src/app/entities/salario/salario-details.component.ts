import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Salario } from './salario.model';
import { SalarioService } from './salario.service';

@Component({
  selector: 'app-salario-details',
  templateUrl: './salario-details.component.html'
})
export class SalarioDetailsComponent implements OnInit {

  salario: Salario;

    constructor(
      private salarioService: SalarioService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.salarioService.getById(id).subscribe(salario => this.salario = salario);
      });
    }
  }

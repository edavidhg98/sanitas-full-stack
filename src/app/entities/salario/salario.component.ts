import { Component, OnInit, Inject } from '@angular/core';

import { SalarioService } from './salario.service';
import { Salario } from './salario.model';

@Component({
  selector: 'app-salario',
  template: `
              <div class="container-fluid">
                <app-salario-list [salarios]="salarios"></app-salario-list>
              </div>
            `
})
export class SalarioComponent implements OnInit {

  salarios: Salario[] = [];

  constructor(private salarioService: SalarioService) {

  }

  ngOnInit() {
    this.salarioService.getAll().subscribe(salarios => this.salarios = salarios);
  }
}

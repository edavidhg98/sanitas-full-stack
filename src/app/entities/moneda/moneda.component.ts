import { Component, OnInit, Inject } from '@angular/core';

import { MonedaService } from './moneda.service';
import { Moneda } from './moneda.model';

@Component({
  selector: 'app-moneda',
  template: `
              <div class="container-fluid">
                <app-moneda-list [monedas]="monedas"></app-moneda-list>
              </div>
            `
})
export class MonedaComponent implements OnInit {

  monedas: Moneda[] = [];

  constructor(private monedaService: MonedaService) {

  }

  ngOnInit() {
    this.monedaService.getAll().subscribe(monedas => this.monedas = monedas);
  }
}

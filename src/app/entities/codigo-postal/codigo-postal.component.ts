import { Component, OnInit, Inject } from '@angular/core';

import { CodigoPostalService } from './codigo-postal.service';
import { CodigoPostal } from './codigo-postal.model';

@Component({
  selector: 'app-codigo-postal',
  template: `
              <div class="container-fluid">
                <app-codigo-postal-list [codigoPostals]="codigoPostals"></app-codigo-postal-list>
              </div>
            `
})
export class CodigoPostalComponent implements OnInit {

  codigoPostals: CodigoPostal[] = [];

  constructor(private codigoPostalService: CodigoPostalService) {

  }

  ngOnInit() {
    this.codigoPostalService.getAll().subscribe(codigoPostals => this.codigoPostals = codigoPostals);
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { CodigoDiaService } from './codigo-dia.service';
import { CodigoDia } from './codigo-dia.model';

@Component({
  selector: 'app-codigo-dia',
  template: `
              <div class="container-fluid">
                <app-codigo-dia-list [codigoDias]="codigoDias"></app-codigo-dia-list>
              </div>
            `
})
export class CodigoDiaComponent implements OnInit {

  codigoDias: CodigoDia[] = [];

  constructor(private codigoDiaService: CodigoDiaService) {

  }

  ngOnInit() {
    this.codigoDiaService.getAll().subscribe(codigoDias => this.codigoDias = codigoDias);
  }
}

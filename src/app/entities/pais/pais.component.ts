import { Component, OnInit, Inject } from '@angular/core';

import { PaisService } from './pais.service';
import { Pais } from './pais.model';

@Component({
  selector: 'app-pais',
  template: `
              <div class="container-fluid">
                <app-pais-list [paiss]="paiss"></app-pais-list>
              </div>
            `
})
export class PaisComponent implements OnInit {

  paiss: Pais[] = [];

  constructor(private paisService: PaisService) {

  }

  ngOnInit() {
    this.paisService.getAll().subscribe(paiss => this.paiss = paiss);
  }
}

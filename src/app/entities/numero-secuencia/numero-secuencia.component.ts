import { Component, OnInit, Inject } from '@angular/core';

import { NumeroSecuenciaService } from './numero-secuencia.service';
import { NumeroSecuencia } from './numero-secuencia.model';

@Component({
  selector: 'app-numero-secuencia',
  template: `
              <div class="container-fluid">
                <app-numero-secuencia-list [numeroSecuencias]="numeroSecuencias"></app-numero-secuencia-list>
              </div>
            `
})
export class NumeroSecuenciaComponent implements OnInit {

  numeroSecuencias: NumeroSecuencia[] = [];

  constructor(private numeroSecuenciaService: NumeroSecuenciaService) {

  }

  ngOnInit() {
    this.numeroSecuenciaService.getAll().subscribe(numeroSecuencias => this.numeroSecuencias = numeroSecuencias);
  }
}

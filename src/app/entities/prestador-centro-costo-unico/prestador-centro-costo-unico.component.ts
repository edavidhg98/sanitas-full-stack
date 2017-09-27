import { Component, OnInit, Inject } from '@angular/core';

import { PrestadorCentroCostoUnicoService } from './prestador-centro-costo-unico.service';
import { PrestadorCentroCostoUnico } from './prestador-centro-costo-unico.model';

@Component({
  selector: 'app-prestador-centro-costo-unico',
  template: `
              <div class="container-fluid">
                <app-prestador-centro-costo-unico-list [prestadorCentroCostoUnicos]="prestadorCentroCostoUnicos"></app-prestador-centro-costo-unico-list>
              </div>
            `
})
export class PrestadorCentroCostoUnicoComponent implements OnInit {

  prestadorCentroCostoUnicos: PrestadorCentroCostoUnico[] = [];

  constructor(private prestadorCentroCostoUnicoService: PrestadorCentroCostoUnicoService) {

  }

  ngOnInit() {
    this.prestadorCentroCostoUnicoService.getAll().subscribe(prestadorCentroCostoUnicos => this.prestadorCentroCostoUnicos = prestadorCentroCostoUnicos);
  }
}

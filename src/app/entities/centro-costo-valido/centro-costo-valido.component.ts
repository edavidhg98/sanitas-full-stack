import { Component, OnInit, Inject } from '@angular/core';

import { CentroCostoValidoService } from './centro-costo-valido.service';
import { CentroCostoValido } from './centro-costo-valido.model';

@Component({
  selector: 'app-centro-costo-valido',
  template: `
              <div class="container-fluid">
                <app-centro-costo-valido-list [centroCostoValidos]="centroCostoValidos"></app-centro-costo-valido-list>
              </div>
            `
})
export class CentroCostoValidoComponent implements OnInit {

  centroCostoValidos: CentroCostoValido[] = [];

  constructor(private centroCostoValidoService: CentroCostoValidoService) {

  }

  ngOnInit() {
    this.centroCostoValidoService.getAll().subscribe(centroCostoValidos => this.centroCostoValidos = centroCostoValidos);
  }
}

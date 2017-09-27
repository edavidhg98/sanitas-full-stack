import { Component, OnInit, Inject } from '@angular/core';

import { TipoTarifaVacunacionService } from './tipo-tarifa-vacunacion.service';
import { TipoTarifaVacunacion } from './tipo-tarifa-vacunacion.model';

@Component({
  selector: 'app-tipo-tarifa-vacunacion',
  template: `
              <div class="container-fluid">
                <app-tipo-tarifa-vacunacion-list [tipoTarifaVacunacions]="tipoTarifaVacunacions"></app-tipo-tarifa-vacunacion-list>
              </div>
            `
})
export class TipoTarifaVacunacionComponent implements OnInit {

  tipoTarifaVacunacions: TipoTarifaVacunacion[] = [];

  constructor(private tipoTarifaVacunacionService: TipoTarifaVacunacionService) {

  }

  ngOnInit() {
    this.tipoTarifaVacunacionService.getAll().subscribe(tipoTarifaVacunacions => this.tipoTarifaVacunacions = tipoTarifaVacunacions);
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { TarifaVacunacionService } from './tarifa-vacunacion.service';
import { TarifaVacunacion } from './tarifa-vacunacion.model';

@Component({
  selector: 'app-tarifa-vacunacion',
  template: `
              <div class="container-fluid">
                <app-tarifa-vacunacion-list [tarifaVacunacions]="tarifaVacunacions"></app-tarifa-vacunacion-list>
              </div>
            `
})
export class TarifaVacunacionComponent implements OnInit {

  tarifaVacunacions: TarifaVacunacion[] = [];

  constructor(private tarifaVacunacionService: TarifaVacunacionService) {

  }

  ngOnInit() {
    this.tarifaVacunacionService.getAll().subscribe(tarifaVacunacions => this.tarifaVacunacions = tarifaVacunacions);
  }
}

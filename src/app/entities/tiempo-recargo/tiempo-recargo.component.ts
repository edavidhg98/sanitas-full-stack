import { Component, OnInit, Inject } from '@angular/core';

import { TiempoRecargoService } from './tiempo-recargo.service';
import { TiempoRecargo } from './tiempo-recargo.model';

@Component({
  selector: 'app-tiempo-recargo',
  template: `
              <div class="container-fluid">
                <app-tiempo-recargo-list [tiempoRecargos]="tiempoRecargos"></app-tiempo-recargo-list>
              </div>
            `
})
export class TiempoRecargoComponent implements OnInit {

  tiempoRecargos: TiempoRecargo[] = [];

  constructor(private tiempoRecargoService: TiempoRecargoService) {

  }

  ngOnInit() {
    this.tiempoRecargoService.getAll().subscribe(tiempoRecargos => this.tiempoRecargos = tiempoRecargos);
  }
}

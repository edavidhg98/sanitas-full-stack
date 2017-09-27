import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TiempoRecargo } from './tiempo-recargo.model';
import { TiempoRecargoService } from './tiempo-recargo.service';

@Component({
  selector: 'app-tiempo-recargo-details',
  templateUrl: './tiempo-recargo-details.component.html'
})
export class TiempoRecargoDetailsComponent implements OnInit {

  tiempoRecargo: TiempoRecargo;

    constructor(
      private tiempoRecargoService: TiempoRecargoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tiempoRecargoService.getById(id).subscribe(tiempoRecargo => this.tiempoRecargo = tiempoRecargo);
      });
    }
  }

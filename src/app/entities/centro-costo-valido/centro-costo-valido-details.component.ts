import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CentroCostoValido } from './centro-costo-valido.model';
import { CentroCostoValidoService } from './centro-costo-valido.service';

@Component({
  selector: 'app-centro-costo-valido-details',
  templateUrl: './centro-costo-valido-details.component.html'
})
export class CentroCostoValidoDetailsComponent implements OnInit {

  centroCostoValido: CentroCostoValido;

    constructor(
      private centroCostoValidoService: CentroCostoValidoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.centroCostoValidoService.getById(id).subscribe(centroCostoValido => this.centroCostoValido = centroCostoValido);
      });
    }
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CensoTraslado } from './censo-traslado.model';
import { CensoTrasladoService } from './censo-traslado.service';

@Component({
  selector: 'app-censo-traslado-details',
  templateUrl: './censo-traslado-details.component.html'
})
export class CensoTrasladoDetailsComponent implements OnInit {

  censoTraslado: CensoTraslado;

    constructor(
      private censoTrasladoService: CensoTrasladoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.censoTrasladoService.getById(id).subscribe(censoTraslado => this.censoTraslado = censoTraslado);
      });
    }
  }

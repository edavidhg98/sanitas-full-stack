import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EncabezadoResultado } from './encabezado-resultado.model';
import { EncabezadoResultadoService } from './encabezado-resultado.service';

@Component({
  selector: 'app-encabezado-resultado-details',
  templateUrl: './encabezado-resultado-details.component.html'
})
export class EncabezadoResultadoDetailsComponent implements OnInit {

  encabezadoResultado: EncabezadoResultado;

    constructor(
      private encabezadoResultadoService: EncabezadoResultadoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.encabezadoResultadoService.getById(id).subscribe(encabezadoResultado => this.encabezadoResultado = encabezadoResultado);
      });
    }
  }

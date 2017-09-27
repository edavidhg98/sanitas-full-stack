import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EncabezadoCatalogo } from './encabezado-catalogo.model';
import { EncabezadoCatalogoService } from './encabezado-catalogo.service';

@Component({
  selector: 'app-encabezado-catalogo-details',
  templateUrl: './encabezado-catalogo-details.component.html'
})
export class EncabezadoCatalogoDetailsComponent implements OnInit {

  encabezadoCatalogo: EncabezadoCatalogo;

    constructor(
      private encabezadoCatalogoService: EncabezadoCatalogoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.encabezadoCatalogoService.getById(id).subscribe(encabezadoCatalogo => this.encabezadoCatalogo = encabezadoCatalogo);
      });
    }
  }

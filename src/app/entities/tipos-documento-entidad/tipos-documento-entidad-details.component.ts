import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TiposDocumentoEntidad } from './tipos-documento-entidad.model';
import { TiposDocumentoEntidadService } from './tipos-documento-entidad.service';

@Component({
  selector: 'app-tipos-documento-entidad-details',
  templateUrl: './tipos-documento-entidad-details.component.html'
})
export class TiposDocumentoEntidadDetailsComponent implements OnInit {

  tiposDocumentoEntidad: TiposDocumentoEntidad;

    constructor(
      private tiposDocumentoEntidadService: TiposDocumentoEntidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tiposDocumentoEntidadService.getById(id).subscribe(tiposDocumentoEntidad => this.tiposDocumentoEntidad = tiposDocumentoEntidad);
      });
    }
  }

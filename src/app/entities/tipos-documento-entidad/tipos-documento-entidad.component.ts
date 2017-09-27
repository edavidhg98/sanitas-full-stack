import { Component, OnInit, Inject } from '@angular/core';

import { TiposDocumentoEntidadService } from './tipos-documento-entidad.service';
import { TiposDocumentoEntidad } from './tipos-documento-entidad.model';

@Component({
  selector: 'app-tipos-documento-entidad',
  template: `
              <div class="container-fluid">
                <app-tipos-documento-entidad-list [tiposDocumentoEntidads]="tiposDocumentoEntidads"></app-tipos-documento-entidad-list>
              </div>
            `
})
export class TiposDocumentoEntidadComponent implements OnInit {

  tiposDocumentoEntidads: TiposDocumentoEntidad[] = [];

  constructor(private tiposDocumentoEntidadService: TiposDocumentoEntidadService) {

  }

  ngOnInit() {
    this.tiposDocumentoEntidadService.getAll().subscribe(tiposDocumentoEntidads => this.tiposDocumentoEntidads = tiposDocumentoEntidads);
  }
}

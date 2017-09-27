import { Component, OnInit, Inject } from '@angular/core';

import { TipoNovedadService } from './tipo-novedad.service';
import { TipoNovedad } from './tipo-novedad.model';

@Component({
  selector: 'app-tipo-novedad',
  template: `
              <div class="container-fluid">
                <app-tipo-novedad-list [tipoNovedads]="tipoNovedads"></app-tipo-novedad-list>
              </div>
            `
})
export class TipoNovedadComponent implements OnInit {

  tipoNovedads: TipoNovedad[] = [];

  constructor(private tipoNovedadService: TipoNovedadService) {

  }

  ngOnInit() {
    this.tipoNovedadService.getAll().subscribe(tipoNovedads => this.tipoNovedads = tipoNovedads);
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { TipoEntidadLaboratorioService } from './tipo-entidad-laboratorio.service';
import { TipoEntidadLaboratorio } from './tipo-entidad-laboratorio.model';

@Component({
  selector: 'app-tipo-entidad-laboratorio',
  template: `
              <div class="container-fluid">
                <app-tipo-entidad-laboratorio-list [tipoEntidadLaboratorios]="tipoEntidadLaboratorios"></app-tipo-entidad-laboratorio-list>
              </div>
            `
})
export class TipoEntidadLaboratorioComponent implements OnInit {

  tipoEntidadLaboratorios: TipoEntidadLaboratorio[] = [];

  constructor(private tipoEntidadLaboratorioService: TipoEntidadLaboratorioService) {

  }

  ngOnInit() {
    this.tipoEntidadLaboratorioService.getAll().subscribe(tipoEntidadLaboratorios => this.tipoEntidadLaboratorios = tipoEntidadLaboratorios);
  }
}

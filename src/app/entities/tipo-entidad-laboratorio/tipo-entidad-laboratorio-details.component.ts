import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoEntidadLaboratorio } from './tipo-entidad-laboratorio.model';
import { TipoEntidadLaboratorioService } from './tipo-entidad-laboratorio.service';

@Component({
  selector: 'app-tipo-entidad-laboratorio-details',
  templateUrl: './tipo-entidad-laboratorio-details.component.html'
})
export class TipoEntidadLaboratorioDetailsComponent implements OnInit {

  tipoEntidadLaboratorio: TipoEntidadLaboratorio;

    constructor(
      private tipoEntidadLaboratorioService: TipoEntidadLaboratorioService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoEntidadLaboratorioService.getById(id).subscribe(tipoEntidadLaboratorio => this.tipoEntidadLaboratorio = tipoEntidadLaboratorio);
      });
    }
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoMotivo } from './tipo-motivo.model';
import { TipoMotivoService } from './tipo-motivo.service';

@Component({
  selector: 'app-tipo-motivo-details',
  templateUrl: './tipo-motivo-details.component.html'
})
export class TipoMotivoDetailsComponent implements OnInit {

  tipoMotivo: TipoMotivo;

    constructor(
      private tipoMotivoService: TipoMotivoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoMotivoService.getById(id).subscribe(tipoMotivo => this.tipoMotivo = tipoMotivo);
      });
    }
  }

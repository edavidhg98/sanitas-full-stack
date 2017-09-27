import { Component, OnInit, Inject } from '@angular/core';

import { TipoMotivoService } from './tipo-motivo.service';
import { TipoMotivo } from './tipo-motivo.model';

@Component({
  selector: 'app-tipo-motivo',
  template: `
              <div class="container-fluid">
                <app-tipo-motivo-list [tipoMotivos]="tipoMotivos"></app-tipo-motivo-list>
              </div>
            `
})
export class TipoMotivoComponent implements OnInit {

  tipoMotivos: TipoMotivo[] = [];

  constructor(private tipoMotivoService: TipoMotivoService) {

  }

  ngOnInit() {
    this.tipoMotivoService.getAll().subscribe(tipoMotivos => this.tipoMotivos = tipoMotivos);
  }
}

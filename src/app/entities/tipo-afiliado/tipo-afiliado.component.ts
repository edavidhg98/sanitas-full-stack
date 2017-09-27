import { Component, OnInit, Inject } from '@angular/core';

import { TipoAfiliadoService } from './tipo-afiliado.service';
import { TipoAfiliado } from './tipo-afiliado.model';

@Component({
  selector: 'app-tipo-afiliado',
  template: `
              <div class="container-fluid">
                <app-tipo-afiliado-list [tipoAfiliados]="tipoAfiliados"></app-tipo-afiliado-list>
              </div>
            `
})
export class TipoAfiliadoComponent implements OnInit {

  tipoAfiliados: TipoAfiliado[] = [];

  constructor(private tipoAfiliadoService: TipoAfiliadoService) {

  }

  ngOnInit() {
    this.tipoAfiliadoService.getAll().subscribe(tipoAfiliados => this.tipoAfiliados = tipoAfiliados);
  }
}

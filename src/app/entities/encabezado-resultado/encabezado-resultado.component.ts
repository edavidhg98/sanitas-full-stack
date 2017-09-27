import { Component, OnInit, Inject } from '@angular/core';

import { EncabezadoResultadoService } from './encabezado-resultado.service';
import { EncabezadoResultado } from './encabezado-resultado.model';

@Component({
  selector: 'app-encabezado-resultado',
  template: `
              <div class="container-fluid">
                <app-encabezado-resultado-list [encabezadoResultados]="encabezadoResultados"></app-encabezado-resultado-list>
              </div>
            `
})
export class EncabezadoResultadoComponent implements OnInit {

  encabezadoResultados: EncabezadoResultado[] = [];

  constructor(private encabezadoResultadoService: EncabezadoResultadoService) {

  }

  ngOnInit() {
    this.encabezadoResultadoService.getAll().subscribe(encabezadoResultados => this.encabezadoResultados = encabezadoResultados);
  }
}

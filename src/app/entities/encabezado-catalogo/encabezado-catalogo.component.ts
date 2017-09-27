import { Component, OnInit, Inject } from '@angular/core';

import { EncabezadoCatalogoService } from './encabezado-catalogo.service';
import { EncabezadoCatalogo } from './encabezado-catalogo.model';

@Component({
  selector: 'app-encabezado-catalogo',
  template: `
              <div class="container-fluid">
                <app-encabezado-catalogo-list [encabezadoCatalogos]="encabezadoCatalogos"></app-encabezado-catalogo-list>
              </div>
            `
})
export class EncabezadoCatalogoComponent implements OnInit {

  encabezadoCatalogos: EncabezadoCatalogo[] = [];

  constructor(private encabezadoCatalogoService: EncabezadoCatalogoService) {

  }

  ngOnInit() {
    this.encabezadoCatalogoService.getAll().subscribe(encabezadoCatalogos => this.encabezadoCatalogos = encabezadoCatalogos);
  }
}

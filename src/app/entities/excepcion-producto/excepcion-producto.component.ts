import { Component, OnInit, Inject } from '@angular/core';

import { ExcepcionProductoService } from './excepcion-producto.service';
import { ExcepcionProducto } from './excepcion-producto.model';

@Component({
  selector: 'app-excepcion-producto',
  template: `
              <div class="container-fluid">
                <app-excepcion-producto-list [excepcionProductos]="excepcionProductos"></app-excepcion-producto-list>
              </div>
            `
})
export class ExcepcionProductoComponent implements OnInit {

  excepcionProductos: ExcepcionProducto[] = [];

  constructor(private excepcionProductoService: ExcepcionProductoService) {

  }

  ngOnInit() {
    this.excepcionProductoService.getAll().subscribe(excepcionProductos => this.excepcionProductos = excepcionProductos);
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { ProductoService } from './producto.service';
import { Producto } from './producto.model';

@Component({
  selector: 'app-producto',
  template: `
              <div class="container-fluid">
                <app-producto-list [productos]="productos"></app-producto-list>
              </div>
            `
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {

  }

  ngOnInit() {
    this.productoService.getAll().subscribe(productos => this.productos = productos);
  }
}

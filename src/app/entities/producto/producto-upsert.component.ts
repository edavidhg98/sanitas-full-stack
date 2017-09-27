import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from './producto.service';
import { Producto } from './producto.model';

import { UnidadMedidaPedidoService } from '../unidad-medida-pedido/unidad-medida-pedido.service';
import { UnidadMedidaPedido } from '../unidad-medida-pedido/unidad-medida-pedido.model';

@Component({
  selector: 'app-producto-upsert',
  templateUrl: './producto-upsert.component.html'
})
export class ProductoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  producto: Producto;

  /** Many-To-One Relationships */
  unidadMedidaPedidos: UnidadMedidaPedido[];
  unidadMedidaPedido1s: UnidadMedidaPedido[];
  unidadMedidaPedido2s: UnidadMedidaPedido[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private unidadMedidaPedidoService: UnidadMedidaPedidoService,
  ) { }

  ngOnInit() {
    this.unidadMedidaPedidoService.getAll().subscribe(unidadMedidaPedidos => this.unidadMedidaPedidos = unidadMedidaPedidos);
    this.unidadMedidaPedidoService.getAll().subscribe(unidadMedidaPedido1s => this.unidadMedidaPedido1s = unidadMedidaPedido1s);
    this.unidadMedidaPedidoService.getAll().subscribe(unidadMedidaPedido2s => this.unidadMedidaPedido2s = unidadMedidaPedido2s);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.productoService.getById(id).subscribe(producto => this.producto = producto);
      }
    });
  }

  save(formValues) {
    this.producto = formValues;
    this.productoService.insert(this.producto).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto']);
      }
    );
  }

  update() {
    this.productoService.update(this.producto._id, this.producto).subscribe(
      (response) => {
        this.router.navigate(['/entities/producto']);
      }
    );
  }
}

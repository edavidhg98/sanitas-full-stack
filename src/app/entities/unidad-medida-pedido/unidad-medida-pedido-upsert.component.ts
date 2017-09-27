import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UnidadMedidaPedidoService } from './unidad-medida-pedido.service';
import { UnidadMedidaPedido } from './unidad-medida-pedido.model';


@Component({
  selector: 'app-unidad-medida-pedido-upsert',
  templateUrl: './unidad-medida-pedido-upsert.component.html'
})
export class UnidadMedidaPedidoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  unidadMedidaPedido: UnidadMedidaPedido;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private unidadMedidaPedidoService: UnidadMedidaPedidoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.unidadMedidaPedidoService.getById(id).subscribe(unidadMedidaPedido => this.unidadMedidaPedido = unidadMedidaPedido);
      }
    });
  }

  save(formValues) {
    this.unidadMedidaPedido = formValues;
    this.unidadMedidaPedidoService.insert(this.unidadMedidaPedido).subscribe(
      (response) => {
        this.router.navigate(['/entities/unidad-medida-pedido']);
      }
    );
  }

  update() {
    this.unidadMedidaPedidoService.update(this.unidadMedidaPedido._id, this.unidadMedidaPedido).subscribe(
      (response) => {
        this.router.navigate(['/entities/unidad-medida-pedido']);
      }
    );
  }
}

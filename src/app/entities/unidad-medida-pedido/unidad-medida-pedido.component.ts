import { Component, OnInit, Inject } from '@angular/core';

import { UnidadMedidaPedidoService } from './unidad-medida-pedido.service';
import { UnidadMedidaPedido } from './unidad-medida-pedido.model';

@Component({
  selector: 'app-unidad-medida-pedido',
  template: `
              <div class="container-fluid">
                <app-unidad-medida-pedido-list [unidadMedidaPedidos]="unidadMedidaPedidos"></app-unidad-medida-pedido-list>
              </div>
            `
})
export class UnidadMedidaPedidoComponent implements OnInit {

  unidadMedidaPedidos: UnidadMedidaPedido[] = [];

  constructor(private unidadMedidaPedidoService: UnidadMedidaPedidoService) {

  }

  ngOnInit() {
    this.unidadMedidaPedidoService.getAll().subscribe(unidadMedidaPedidos => this.unidadMedidaPedidos = unidadMedidaPedidos);
  }
}

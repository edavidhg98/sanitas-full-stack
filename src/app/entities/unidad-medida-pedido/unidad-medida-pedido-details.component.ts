import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UnidadMedidaPedido } from './unidad-medida-pedido.model';
import { UnidadMedidaPedidoService } from './unidad-medida-pedido.service';

@Component({
  selector: 'app-unidad-medida-pedido-details',
  templateUrl: './unidad-medida-pedido-details.component.html'
})
export class UnidadMedidaPedidoDetailsComponent implements OnInit {

  unidadMedidaPedido: UnidadMedidaPedido;

    constructor(
      private unidadMedidaPedidoService: UnidadMedidaPedidoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.unidadMedidaPedidoService.getById(id).subscribe(unidadMedidaPedido => this.unidadMedidaPedido = unidadMedidaPedido);
      });
    }
  }

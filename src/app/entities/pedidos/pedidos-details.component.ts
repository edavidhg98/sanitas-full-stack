import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pedidos } from './pedidos.model';
import { PedidosService } from './pedidos.service';

@Component({
  selector: 'app-pedidos-details',
  templateUrl: './pedidos-details.component.html'
})
export class PedidosDetailsComponent implements OnInit {

  pedidos: Pedidos;

    constructor(
      private pedidosService: PedidosService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.pedidosService.getById(id).subscribe(pedidos => this.pedidos = pedidos);
      });
    }
  }

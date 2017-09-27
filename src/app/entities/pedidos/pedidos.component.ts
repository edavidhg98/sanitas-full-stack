import { Component, OnInit, Inject } from '@angular/core';

import { PedidosService } from './pedidos.service';
import { Pedidos } from './pedidos.model';

@Component({
  selector: 'app-pedidos',
  template: `
              <div class="container-fluid">
                <app-pedidos-list [pedidoss]="pedidoss"></app-pedidos-list>
              </div>
            `
})
export class PedidosComponent implements OnInit {

  pedidoss: Pedidos[] = [];

  constructor(private pedidosService: PedidosService) {

  }

  ngOnInit() {
    this.pedidosService.getAll().subscribe(pedidoss => this.pedidoss = pedidoss);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PedidosService } from './pedidos.service';
import { Pedidos } from './pedidos.model';
import { absolutePath } from './pedidos.route';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html'
})
export class PedidosListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() pedidoss: Pedidos[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private pedidosService: PedidosService,
    private modalService: NgbModal
  ) {

  }

  ngOnInit() {
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  }

  openDeleteModal(content: any, id: string) {
    this.modalService.open(content).result.then((option) => {
      if (option === this.deleteModalOpts.ok) {
        this.pedidosService.delete(id).subscribe(response => {
          this.pedidoss = this.pedidoss.filter(pedidos => pedidos._id !== id);
        });
      }
    }, (reason) => {});
  }
}

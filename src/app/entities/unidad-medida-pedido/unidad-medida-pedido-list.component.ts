import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UnidadMedidaPedidoService } from './unidad-medida-pedido.service';
import { UnidadMedidaPedido } from './unidad-medida-pedido.model';
import { absolutePath } from './unidad-medida-pedido.route';

@Component({
  selector: 'app-unidad-medida-pedido-list',
  templateUrl: './unidad-medida-pedido-list.component.html'
})
export class UnidadMedidaPedidoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() unidadMedidaPedidos: UnidadMedidaPedido[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private unidadMedidaPedidoService: UnidadMedidaPedidoService,
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
        this.unidadMedidaPedidoService.delete(id).subscribe(response => {
          this.unidadMedidaPedidos = this.unidadMedidaPedidos.filter(unidadMedidaPedido => unidadMedidaPedido._id !== id);
        });
      }
    }, (reason) => {});
  }
}

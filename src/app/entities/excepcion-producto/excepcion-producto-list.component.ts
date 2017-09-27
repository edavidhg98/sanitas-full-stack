import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ExcepcionProductoService } from './excepcion-producto.service';
import { ExcepcionProducto } from './excepcion-producto.model';
import { absolutePath } from './excepcion-producto.route';

@Component({
  selector: 'app-excepcion-producto-list',
  templateUrl: './excepcion-producto-list.component.html'
})
export class ExcepcionProductoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() excepcionProductos: ExcepcionProducto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private excepcionProductoService: ExcepcionProductoService,
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
        this.excepcionProductoService.delete(id).subscribe(response => {
          this.excepcionProductos = this.excepcionProductos.filter(excepcionProducto => excepcionProducto._id !== id);
        });
      }
    }, (reason) => {});
  }
}

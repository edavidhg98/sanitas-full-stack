import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientoCentroCostoService } from './procedimiento-centro-costo.service';
import { ProcedimientoCentroCosto } from './procedimiento-centro-costo.model';
import { absolutePath } from './procedimiento-centro-costo.route';

@Component({
  selector: 'app-procedimiento-centro-costo-list',
  templateUrl: './procedimiento-centro-costo-list.component.html'
})
export class ProcedimientoCentroCostoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientoCentroCostos: ProcedimientoCentroCosto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientoCentroCostoService: ProcedimientoCentroCostoService,
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
        this.procedimientoCentroCostoService.delete(id).subscribe(response => {
          this.procedimientoCentroCostos = this.procedimientoCentroCostos.filter(procedimientoCentroCosto => procedimientoCentroCosto._id !== id);
        });
      }
    }, (reason) => {});
  }
}

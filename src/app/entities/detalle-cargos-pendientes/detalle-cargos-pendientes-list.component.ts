import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DetalleCargosPendientesService } from './detalle-cargos-pendientes.service';
import { DetalleCargosPendientes } from './detalle-cargos-pendientes.model';
import { absolutePath } from './detalle-cargos-pendientes.route';

@Component({
  selector: 'app-detalle-cargos-pendientes-list',
  templateUrl: './detalle-cargos-pendientes-list.component.html'
})
export class DetalleCargosPendientesListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() detalleCargosPendientess: DetalleCargosPendientes[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private detalleCargosPendientesService: DetalleCargosPendientesService,
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
        this.detalleCargosPendientesService.delete(id).subscribe(response => {
          this.detalleCargosPendientess = this.detalleCargosPendientess.filter(detalleCargosPendientes => detalleCargosPendientes._id !== id);
        });
      }
    }, (reason) => {});
  }
}

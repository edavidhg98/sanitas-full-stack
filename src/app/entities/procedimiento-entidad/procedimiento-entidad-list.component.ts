import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientoEntidadService } from './procedimiento-entidad.service';
import { ProcedimientoEntidad } from './procedimiento-entidad.model';
import { absolutePath } from './procedimiento-entidad.route';

@Component({
  selector: 'app-procedimiento-entidad-list',
  templateUrl: './procedimiento-entidad-list.component.html'
})
export class ProcedimientoEntidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientoEntidads: ProcedimientoEntidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientoEntidadService: ProcedimientoEntidadService,
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
        this.procedimientoEntidadService.delete(id).subscribe(response => {
          this.procedimientoEntidads = this.procedimientoEntidads.filter(procedimientoEntidad => procedimientoEntidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

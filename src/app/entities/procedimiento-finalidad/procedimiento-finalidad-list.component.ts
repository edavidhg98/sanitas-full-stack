import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientoFinalidadService } from './procedimiento-finalidad.service';
import { ProcedimientoFinalidad } from './procedimiento-finalidad.model';
import { absolutePath } from './procedimiento-finalidad.route';

@Component({
  selector: 'app-procedimiento-finalidad-list',
  templateUrl: './procedimiento-finalidad-list.component.html'
})
export class ProcedimientoFinalidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientoFinalidads: ProcedimientoFinalidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientoFinalidadService: ProcedimientoFinalidadService,
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
        this.procedimientoFinalidadService.delete(id).subscribe(response => {
          this.procedimientoFinalidads = this.procedimientoFinalidads.filter(procedimientoFinalidad => procedimientoFinalidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

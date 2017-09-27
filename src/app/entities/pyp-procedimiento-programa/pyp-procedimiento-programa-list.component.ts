import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PypProcedimientoProgramaService } from './pyp-procedimiento-programa.service';
import { PypProcedimientoPrograma } from './pyp-procedimiento-programa.model';
import { absolutePath } from './pyp-procedimiento-programa.route';

@Component({
  selector: 'app-pyp-procedimiento-programa-list',
  templateUrl: './pyp-procedimiento-programa-list.component.html'
})
export class PypProcedimientoProgramaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() pypProcedimientoProgramas: PypProcedimientoPrograma[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private pypProcedimientoProgramaService: PypProcedimientoProgramaService,
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
        this.pypProcedimientoProgramaService.delete(id).subscribe(response => {
          this.pypProcedimientoProgramas = this.pypProcedimientoProgramas.filter(pypProcedimientoPrograma => pypProcedimientoPrograma._id !== id);
        });
      }
    }, (reason) => {});
  }
}

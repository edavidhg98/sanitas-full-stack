import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MedicoGrupoProcedimientoService } from './medico-grupo-procedimiento.service';
import { MedicoGrupoProcedimiento } from './medico-grupo-procedimiento.model';
import { absolutePath } from './medico-grupo-procedimiento.route';

@Component({
  selector: 'app-medico-grupo-procedimiento-list',
  templateUrl: './medico-grupo-procedimiento-list.component.html'
})
export class MedicoGrupoProcedimientoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() medicoGrupoProcedimientos: MedicoGrupoProcedimiento[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private medicoGrupoProcedimientoService: MedicoGrupoProcedimientoService,
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
        this.medicoGrupoProcedimientoService.delete(id).subscribe(response => {
          this.medicoGrupoProcedimientos = this.medicoGrupoProcedimientos.filter(medicoGrupoProcedimiento => medicoGrupoProcedimiento._id !== id);
        });
      }
    }, (reason) => {});
  }
}

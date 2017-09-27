import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PacienteInconsistenciasService } from './paciente-inconsistencias.service';
import { PacienteInconsistencias } from './paciente-inconsistencias.model';
import { absolutePath } from './paciente-inconsistencias.route';

@Component({
  selector: 'app-paciente-inconsistencias-list',
  templateUrl: './paciente-inconsistencias-list.component.html'
})
export class PacienteInconsistenciasListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() pacienteInconsistenciass: PacienteInconsistencias[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private pacienteInconsistenciasService: PacienteInconsistenciasService,
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
        this.pacienteInconsistenciasService.delete(id).subscribe(response => {
          this.pacienteInconsistenciass = this.pacienteInconsistenciass.filter(pacienteInconsistencias => pacienteInconsistencias._id !== id);
        });
      }
    }, (reason) => {});
  }
}

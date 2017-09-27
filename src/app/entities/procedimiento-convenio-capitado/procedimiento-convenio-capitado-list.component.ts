import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientoConvenioCapitadoService } from './procedimiento-convenio-capitado.service';
import { ProcedimientoConvenioCapitado } from './procedimiento-convenio-capitado.model';
import { absolutePath } from './procedimiento-convenio-capitado.route';

@Component({
  selector: 'app-procedimiento-convenio-capitado-list',
  templateUrl: './procedimiento-convenio-capitado-list.component.html'
})
export class ProcedimientoConvenioCapitadoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientoConvenioCapitados: ProcedimientoConvenioCapitado[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientoConvenioCapitadoService: ProcedimientoConvenioCapitadoService,
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
        this.procedimientoConvenioCapitadoService.delete(id).subscribe(response => {
          this.procedimientoConvenioCapitados = this.procedimientoConvenioCapitados.filter(procedimientoConvenioCapitado => procedimientoConvenioCapitado._id !== id);
        });
      }
    }, (reason) => {});
  }
}

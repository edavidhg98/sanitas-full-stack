import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuditoriaContratoService } from './auditoria-contrato.service';
import { AuditoriaContrato } from './auditoria-contrato.model';
import { absolutePath } from './auditoria-contrato.route';

@Component({
  selector: 'app-auditoria-contrato-list',
  templateUrl: './auditoria-contrato-list.component.html'
})
export class AuditoriaContratoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() auditoriaContratos: AuditoriaContrato[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private auditoriaContratoService: AuditoriaContratoService,
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
        this.auditoriaContratoService.delete(id).subscribe(response => {
          this.auditoriaContratos = this.auditoriaContratos.filter(auditoriaContrato => auditoriaContrato._id !== id);
        });
      }
    }, (reason) => {});
  }
}

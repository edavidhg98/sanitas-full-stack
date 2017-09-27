import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuditoriaSolicitudService } from './auditoria-solicitud.service';
import { AuditoriaSolicitud } from './auditoria-solicitud.model';
import { absolutePath } from './auditoria-solicitud.route';

@Component({
  selector: 'app-auditoria-solicitud-list',
  templateUrl: './auditoria-solicitud-list.component.html'
})
export class AuditoriaSolicitudListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() auditoriaSolicituds: AuditoriaSolicitud[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private auditoriaSolicitudService: AuditoriaSolicitudService,
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
        this.auditoriaSolicitudService.delete(id).subscribe(response => {
          this.auditoriaSolicituds = this.auditoriaSolicituds.filter(auditoriaSolicitud => auditoriaSolicitud._id !== id);
        });
      }
    }, (reason) => {});
  }
}

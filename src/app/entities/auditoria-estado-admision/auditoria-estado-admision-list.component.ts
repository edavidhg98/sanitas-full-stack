import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuditoriaEstadoAdmisionService } from './auditoria-estado-admision.service';
import { AuditoriaEstadoAdmision } from './auditoria-estado-admision.model';
import { absolutePath } from './auditoria-estado-admision.route';

@Component({
  selector: 'app-auditoria-estado-admision-list',
  templateUrl: './auditoria-estado-admision-list.component.html'
})
export class AuditoriaEstadoAdmisionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() auditoriaEstadoAdmisions: AuditoriaEstadoAdmision[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private auditoriaEstadoAdmisionService: AuditoriaEstadoAdmisionService,
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
        this.auditoriaEstadoAdmisionService.delete(id).subscribe(response => {
          this.auditoriaEstadoAdmisions = this.auditoriaEstadoAdmisions.filter(auditoriaEstadoAdmision => auditoriaEstadoAdmision._id !== id);
        });
      }
    }, (reason) => {});
  }
}

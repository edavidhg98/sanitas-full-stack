import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuditoriaService } from './auditoria.service';
import { Auditoria } from './auditoria.model';
import { absolutePath } from './auditoria.route';

@Component({
  selector: 'app-auditoria-list',
  templateUrl: './auditoria-list.component.html'
})
export class AuditoriaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() auditorias: Auditoria[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private auditoriaService: AuditoriaService,
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
        this.auditoriaService.delete(id).subscribe(response => {
          this.auditorias = this.auditorias.filter(auditoria => auditoria._id !== id);
        });
      }
    }, (reason) => {});
  }
}

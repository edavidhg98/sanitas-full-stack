import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoEntidadLaboratorioService } from './tipo-entidad-laboratorio.service';
import { TipoEntidadLaboratorio } from './tipo-entidad-laboratorio.model';
import { absolutePath } from './tipo-entidad-laboratorio.route';

@Component({
  selector: 'app-tipo-entidad-laboratorio-list',
  templateUrl: './tipo-entidad-laboratorio-list.component.html'
})
export class TipoEntidadLaboratorioListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoEntidadLaboratorios: TipoEntidadLaboratorio[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoEntidadLaboratorioService: TipoEntidadLaboratorioService,
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
        this.tipoEntidadLaboratorioService.delete(id).subscribe(response => {
          this.tipoEntidadLaboratorios = this.tipoEntidadLaboratorios.filter(tipoEntidadLaboratorio => tipoEntidadLaboratorio._id !== id);
        });
      }
    }, (reason) => {});
  }
}

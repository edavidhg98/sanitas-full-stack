import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoMotivoService } from './tipo-motivo.service';
import { TipoMotivo } from './tipo-motivo.model';
import { absolutePath } from './tipo-motivo.route';

@Component({
  selector: 'app-tipo-motivo-list',
  templateUrl: './tipo-motivo-list.component.html'
})
export class TipoMotivoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoMotivos: TipoMotivo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoMotivoService: TipoMotivoService,
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
        this.tipoMotivoService.delete(id).subscribe(response => {
          this.tipoMotivos = this.tipoMotivos.filter(tipoMotivo => tipoMotivo._id !== id);
        });
      }
    }, (reason) => {});
  }
}

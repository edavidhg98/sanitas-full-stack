import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TiposDocumentoEntidadService } from './tipos-documento-entidad.service';
import { TiposDocumentoEntidad } from './tipos-documento-entidad.model';
import { absolutePath } from './tipos-documento-entidad.route';

@Component({
  selector: 'app-tipos-documento-entidad-list',
  templateUrl: './tipos-documento-entidad-list.component.html'
})
export class TiposDocumentoEntidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tiposDocumentoEntidads: TiposDocumentoEntidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tiposDocumentoEntidadService: TiposDocumentoEntidadService,
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
        this.tiposDocumentoEntidadService.delete(id).subscribe(response => {
          this.tiposDocumentoEntidads = this.tiposDocumentoEntidads.filter(tiposDocumentoEntidad => tiposDocumentoEntidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

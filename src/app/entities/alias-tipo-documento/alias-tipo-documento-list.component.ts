import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AliasTipoDocumentoService } from './alias-tipo-documento.service';
import { AliasTipoDocumento } from './alias-tipo-documento.model';
import { absolutePath } from './alias-tipo-documento.route';

@Component({
  selector: 'app-alias-tipo-documento-list',
  templateUrl: './alias-tipo-documento-list.component.html'
})
export class AliasTipoDocumentoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() aliasTipoDocumentos: AliasTipoDocumento[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private aliasTipoDocumentoService: AliasTipoDocumentoService,
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
        this.aliasTipoDocumentoService.delete(id).subscribe(response => {
          this.aliasTipoDocumentos = this.aliasTipoDocumentos.filter(aliasTipoDocumento => aliasTipoDocumento._id !== id);
        });
      }
    }, (reason) => {});
  }
}

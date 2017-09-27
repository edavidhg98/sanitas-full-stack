import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoAfiliadoService } from './tipo-afiliado.service';
import { TipoAfiliado } from './tipo-afiliado.model';
import { absolutePath } from './tipo-afiliado.route';

@Component({
  selector: 'app-tipo-afiliado-list',
  templateUrl: './tipo-afiliado-list.component.html'
})
export class TipoAfiliadoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoAfiliados: TipoAfiliado[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoAfiliadoService: TipoAfiliadoService,
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
        this.tipoAfiliadoService.delete(id).subscribe(response => {
          this.tipoAfiliados = this.tipoAfiliados.filter(tipoAfiliado => tipoAfiliado._id !== id);
        });
      }
    }, (reason) => {});
  }
}

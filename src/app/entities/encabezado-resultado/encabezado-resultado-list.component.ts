import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EncabezadoResultadoService } from './encabezado-resultado.service';
import { EncabezadoResultado } from './encabezado-resultado.model';
import { absolutePath } from './encabezado-resultado.route';

@Component({
  selector: 'app-encabezado-resultado-list',
  templateUrl: './encabezado-resultado-list.component.html'
})
export class EncabezadoResultadoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() encabezadoResultados: EncabezadoResultado[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private encabezadoResultadoService: EncabezadoResultadoService,
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
        this.encabezadoResultadoService.delete(id).subscribe(response => {
          this.encabezadoResultados = this.encabezadoResultados.filter(encabezadoResultado => encabezadoResultado._id !== id);
        });
      }
    }, (reason) => {});
  }
}

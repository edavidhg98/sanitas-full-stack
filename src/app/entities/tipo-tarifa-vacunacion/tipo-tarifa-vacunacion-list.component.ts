import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoTarifaVacunacionService } from './tipo-tarifa-vacunacion.service';
import { TipoTarifaVacunacion } from './tipo-tarifa-vacunacion.model';
import { absolutePath } from './tipo-tarifa-vacunacion.route';

@Component({
  selector: 'app-tipo-tarifa-vacunacion-list',
  templateUrl: './tipo-tarifa-vacunacion-list.component.html'
})
export class TipoTarifaVacunacionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoTarifaVacunacions: TipoTarifaVacunacion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoTarifaVacunacionService: TipoTarifaVacunacionService,
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
        this.tipoTarifaVacunacionService.delete(id).subscribe(response => {
          this.tipoTarifaVacunacions = this.tipoTarifaVacunacions.filter(tipoTarifaVacunacion => tipoTarifaVacunacion._id !== id);
        });
      }
    }, (reason) => {});
  }
}

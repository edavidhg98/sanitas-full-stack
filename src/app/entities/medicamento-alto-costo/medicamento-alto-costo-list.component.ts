import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MedicamentoAltoCostoService } from './medicamento-alto-costo.service';
import { MedicamentoAltoCosto } from './medicamento-alto-costo.model';
import { absolutePath } from './medicamento-alto-costo.route';

@Component({
  selector: 'app-medicamento-alto-costo-list',
  templateUrl: './medicamento-alto-costo-list.component.html'
})
export class MedicamentoAltoCostoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() medicamentoAltoCostos: MedicamentoAltoCosto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private medicamentoAltoCostoService: MedicamentoAltoCostoService,
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
        this.medicamentoAltoCostoService.delete(id).subscribe(response => {
          this.medicamentoAltoCostos = this.medicamentoAltoCostos.filter(medicamentoAltoCosto => medicamentoAltoCosto._id !== id);
        });
      }
    }, (reason) => {});
  }
}

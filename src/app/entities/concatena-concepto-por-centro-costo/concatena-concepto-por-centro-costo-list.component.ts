import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConcatenaConceptoPorCentroCostoService } from './concatena-concepto-por-centro-costo.service';
import { ConcatenaConceptoPorCentroCosto } from './concatena-concepto-por-centro-costo.model';
import { absolutePath } from './concatena-concepto-por-centro-costo.route';

@Component({
  selector: 'app-concatena-concepto-por-centro-costo-list',
  templateUrl: './concatena-concepto-por-centro-costo-list.component.html'
})
export class ConcatenaConceptoPorCentroCostoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() concatenaConceptoPorCentroCostos: ConcatenaConceptoPorCentroCosto[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private concatenaConceptoPorCentroCostoService: ConcatenaConceptoPorCentroCostoService,
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
        this.concatenaConceptoPorCentroCostoService.delete(id).subscribe(response => {
          this.concatenaConceptoPorCentroCostos = this.concatenaConceptoPorCentroCostos.filter(concatenaConceptoPorCentroCosto => concatenaConceptoPorCentroCosto._id !== id);
        });
      }
    }, (reason) => {});
  }
}

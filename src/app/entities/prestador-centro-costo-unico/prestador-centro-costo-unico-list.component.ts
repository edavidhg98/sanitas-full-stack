import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PrestadorCentroCostoUnicoService } from './prestador-centro-costo-unico.service';
import { PrestadorCentroCostoUnico } from './prestador-centro-costo-unico.model';
import { absolutePath } from './prestador-centro-costo-unico.route';

@Component({
  selector: 'app-prestador-centro-costo-unico-list',
  templateUrl: './prestador-centro-costo-unico-list.component.html'
})
export class PrestadorCentroCostoUnicoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() prestadorCentroCostoUnicos: PrestadorCentroCostoUnico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private prestadorCentroCostoUnicoService: PrestadorCentroCostoUnicoService,
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
        this.prestadorCentroCostoUnicoService.delete(id).subscribe(response => {
          this.prestadorCentroCostoUnicos = this.prestadorCentroCostoUnicos.filter(prestadorCentroCostoUnico => prestadorCentroCostoUnico._id !== id);
        });
      }
    }, (reason) => {});
  }
}

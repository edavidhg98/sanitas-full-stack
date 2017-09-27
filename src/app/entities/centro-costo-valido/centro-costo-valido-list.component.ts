import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CentroCostoValidoService } from './centro-costo-valido.service';
import { CentroCostoValido } from './centro-costo-valido.model';
import { absolutePath } from './centro-costo-valido.route';

@Component({
  selector: 'app-centro-costo-valido-list',
  templateUrl: './centro-costo-valido-list.component.html'
})
export class CentroCostoValidoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() centroCostoValidos: CentroCostoValido[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private centroCostoValidoService: CentroCostoValidoService,
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
        this.centroCostoValidoService.delete(id).subscribe(response => {
          this.centroCostoValidos = this.centroCostoValidos.filter(centroCostoValido => centroCostoValido._id !== id);
        });
      }
    }, (reason) => {});
  }
}

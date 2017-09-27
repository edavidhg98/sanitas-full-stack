import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NumeroSecuenciaService } from './numero-secuencia.service';
import { NumeroSecuencia } from './numero-secuencia.model';
import { absolutePath } from './numero-secuencia.route';

@Component({
  selector: 'app-numero-secuencia-list',
  templateUrl: './numero-secuencia-list.component.html'
})
export class NumeroSecuenciaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() numeroSecuencias: NumeroSecuencia[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private numeroSecuenciaService: NumeroSecuenciaService,
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
        this.numeroSecuenciaService.delete(id).subscribe(response => {
          this.numeroSecuencias = this.numeroSecuencias.filter(numeroSecuencia => numeroSecuencia._id !== id);
        });
      }
    }, (reason) => {});
  }
}

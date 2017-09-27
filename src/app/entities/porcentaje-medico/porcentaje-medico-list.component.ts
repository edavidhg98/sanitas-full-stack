import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PorcentajeMedicoService } from './porcentaje-medico.service';
import { PorcentajeMedico } from './porcentaje-medico.model';
import { absolutePath } from './porcentaje-medico.route';

@Component({
  selector: 'app-porcentaje-medico-list',
  templateUrl: './porcentaje-medico-list.component.html'
})
export class PorcentajeMedicoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() porcentajeMedicos: PorcentajeMedico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private porcentajeMedicoService: PorcentajeMedicoService,
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
        this.porcentajeMedicoService.delete(id).subscribe(response => {
          this.porcentajeMedicos = this.porcentajeMedicos.filter(porcentajeMedico => porcentajeMedico._id !== id);
        });
      }
    }, (reason) => {});
  }
}

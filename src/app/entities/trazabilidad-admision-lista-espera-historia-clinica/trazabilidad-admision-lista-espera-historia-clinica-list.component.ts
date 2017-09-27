import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TrazabilidadAdmisionListaEsperaHistoriaClinicaService } from './trazabilidad-admision-lista-espera-historia-clinica.service';
import { TrazabilidadAdmisionListaEsperaHistoriaClinica } from './trazabilidad-admision-lista-espera-historia-clinica.model';
import { absolutePath } from './trazabilidad-admision-lista-espera-historia-clinica.route';

@Component({
  selector: 'app-trazabilidad-admision-lista-espera-historia-clinica-list',
  templateUrl: './trazabilidad-admision-lista-espera-historia-clinica-list.component.html'
})
export class TrazabilidadAdmisionListaEsperaHistoriaClinicaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() trazabilidadAdmisionListaEsperaHistoriaClinicas: TrazabilidadAdmisionListaEsperaHistoriaClinica[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private trazabilidadAdmisionListaEsperaHistoriaClinicaService: TrazabilidadAdmisionListaEsperaHistoriaClinicaService,
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
        this.trazabilidadAdmisionListaEsperaHistoriaClinicaService.delete(id).subscribe(response => {
          this.trazabilidadAdmisionListaEsperaHistoriaClinicas = this.trazabilidadAdmisionListaEsperaHistoriaClinicas.filter(trazabilidadAdmisionListaEsperaHistoriaClinica => trazabilidadAdmisionListaEsperaHistoriaClinica._id !== id);
        });
      }
    }, (reason) => {});
  }
}

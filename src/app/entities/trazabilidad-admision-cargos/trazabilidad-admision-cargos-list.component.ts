import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TrazabilidadAdmisionCargosService } from './trazabilidad-admision-cargos.service';
import { TrazabilidadAdmisionCargos } from './trazabilidad-admision-cargos.model';
import { absolutePath } from './trazabilidad-admision-cargos.route';

@Component({
  selector: 'app-trazabilidad-admision-cargos-list',
  templateUrl: './trazabilidad-admision-cargos-list.component.html'
})
export class TrazabilidadAdmisionCargosListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() trazabilidadAdmisionCargoss: TrazabilidadAdmisionCargos[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private trazabilidadAdmisionCargosService: TrazabilidadAdmisionCargosService,
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
        this.trazabilidadAdmisionCargosService.delete(id).subscribe(response => {
          this.trazabilidadAdmisionCargoss = this.trazabilidadAdmisionCargoss.filter(trazabilidadAdmisionCargos => trazabilidadAdmisionCargos._id !== id);
        });
      }
    }, (reason) => {});
  }
}

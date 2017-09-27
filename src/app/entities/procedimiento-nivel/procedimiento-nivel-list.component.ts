import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientoNivelService } from './procedimiento-nivel.service';
import { ProcedimientoNivel } from './procedimiento-nivel.model';
import { absolutePath } from './procedimiento-nivel.route';

@Component({
  selector: 'app-procedimiento-nivel-list',
  templateUrl: './procedimiento-nivel-list.component.html'
})
export class ProcedimientoNivelListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientoNivels: ProcedimientoNivel[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientoNivelService: ProcedimientoNivelService,
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
        this.procedimientoNivelService.delete(id).subscribe(response => {
          this.procedimientoNivels = this.procedimientoNivels.filter(procedimientoNivel => procedimientoNivel._id !== id);
        });
      }
    }, (reason) => {});
  }
}

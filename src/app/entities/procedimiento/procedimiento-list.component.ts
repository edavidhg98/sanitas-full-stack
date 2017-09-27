import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientoService } from './procedimiento.service';
import { Procedimiento } from './procedimiento.model';
import { absolutePath } from './procedimiento.route';

@Component({
  selector: 'app-procedimiento-list',
  templateUrl: './procedimiento-list.component.html'
})
export class ProcedimientoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientos: Procedimiento[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientoService: ProcedimientoService,
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
        this.procedimientoService.delete(id).subscribe(response => {
          this.procedimientos = this.procedimientos.filter(procedimiento => procedimiento._id !== id);
        });
      }
    }, (reason) => {});
  }
}

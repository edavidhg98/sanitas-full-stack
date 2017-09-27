import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GrupoProcedimientoService } from './grupo-procedimiento.service';
import { GrupoProcedimiento } from './grupo-procedimiento.model';
import { absolutePath } from './grupo-procedimiento.route';

@Component({
  selector: 'app-grupo-procedimiento-list',
  templateUrl: './grupo-procedimiento-list.component.html'
})
export class GrupoProcedimientoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() grupoProcedimientos: GrupoProcedimiento[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private grupoProcedimientoService: GrupoProcedimientoService,
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
        this.grupoProcedimientoService.delete(id).subscribe(response => {
          this.grupoProcedimientos = this.grupoProcedimientos.filter(grupoProcedimiento => grupoProcedimiento._id !== id);
        });
      }
    }, (reason) => {});
  }
}

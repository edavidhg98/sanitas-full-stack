import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SubGrupoProcedimientoService } from './sub-grupo-procedimiento.service';
import { SubGrupoProcedimiento } from './sub-grupo-procedimiento.model';
import { absolutePath } from './sub-grupo-procedimiento.route';

@Component({
  selector: 'app-sub-grupo-procedimiento-list',
  templateUrl: './sub-grupo-procedimiento-list.component.html'
})
export class SubGrupoProcedimientoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() subGrupoProcedimientos: SubGrupoProcedimiento[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private subGrupoProcedimientoService: SubGrupoProcedimientoService,
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
        this.subGrupoProcedimientoService.delete(id).subscribe(response => {
          this.subGrupoProcedimientos = this.subGrupoProcedimientos.filter(subGrupoProcedimiento => subGrupoProcedimiento._id !== id);
        });
      }
    }, (reason) => {});
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProcedimientosRisService } from './procedimientos-ris.service';
import { ProcedimientosRis } from './procedimientos-ris.model';
import { absolutePath } from './procedimientos-ris.route';

@Component({
  selector: 'app-procedimientos-ris-list',
  templateUrl: './procedimientos-ris-list.component.html'
})
export class ProcedimientosRisListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() procedimientosRiss: ProcedimientosRis[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private procedimientosRisService: ProcedimientosRisService,
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
        this.procedimientosRisService.delete(id).subscribe(response => {
          this.procedimientosRiss = this.procedimientosRiss.filter(procedimientosRis => procedimientosRis._id !== id);
        });
      }
    }, (reason) => {});
  }
}

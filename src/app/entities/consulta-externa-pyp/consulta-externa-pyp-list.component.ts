import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConsultaExternaPypService } from './consulta-externa-pyp.service';
import { ConsultaExternaPyp } from './consulta-externa-pyp.model';
import { absolutePath } from './consulta-externa-pyp.route';

@Component({
  selector: 'app-consulta-externa-pyp-list',
  templateUrl: './consulta-externa-pyp-list.component.html'
})
export class ConsultaExternaPypListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() consultaExternaPyps: ConsultaExternaPyp[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private consultaExternaPypService: ConsultaExternaPypService,
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
        this.consultaExternaPypService.delete(id).subscribe(response => {
          this.consultaExternaPyps = this.consultaExternaPyps.filter(consultaExternaPyp => consultaExternaPyp._id !== id);
        });
      }
    }, (reason) => {});
  }
}

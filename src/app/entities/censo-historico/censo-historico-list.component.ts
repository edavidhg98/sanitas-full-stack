import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CensoHistoricoService } from './censo-historico.service';
import { CensoHistorico } from './censo-historico.model';
import { absolutePath } from './censo-historico.route';

@Component({
  selector: 'app-censo-historico-list',
  templateUrl: './censo-historico-list.component.html'
})
export class CensoHistoricoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() censoHistoricos: CensoHistorico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private censoHistoricoService: CensoHistoricoService,
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
        this.censoHistoricoService.delete(id).subscribe(response => {
          this.censoHistoricos = this.censoHistoricos.filter(censoHistorico => censoHistorico._id !== id);
        });
      }
    }, (reason) => {});
  }
}

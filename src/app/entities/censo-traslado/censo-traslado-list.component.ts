import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CensoTrasladoService } from './censo-traslado.service';
import { CensoTraslado } from './censo-traslado.model';
import { absolutePath } from './censo-traslado.route';

@Component({
  selector: 'app-censo-traslado-list',
  templateUrl: './censo-traslado-list.component.html'
})
export class CensoTrasladoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() censoTraslados: CensoTraslado[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private censoTrasladoService: CensoTrasladoService,
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
        this.censoTrasladoService.delete(id).subscribe(response => {
          this.censoTraslados = this.censoTraslados.filter(censoTraslado => censoTraslado._id !== id);
        });
      }
    }, (reason) => {});
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TiempoRecargoService } from './tiempo-recargo.service';
import { TiempoRecargo } from './tiempo-recargo.model';
import { absolutePath } from './tiempo-recargo.route';

@Component({
  selector: 'app-tiempo-recargo-list',
  templateUrl: './tiempo-recargo-list.component.html'
})
export class TiempoRecargoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tiempoRecargos: TiempoRecargo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tiempoRecargoService: TiempoRecargoService,
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
        this.tiempoRecargoService.delete(id).subscribe(response => {
          this.tiempoRecargos = this.tiempoRecargos.filter(tiempoRecargo => tiempoRecargo._id !== id);
        });
      }
    }, (reason) => {});
  }
}

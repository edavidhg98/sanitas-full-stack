import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CensoServicioService } from './censo-servicio.service';
import { CensoServicio } from './censo-servicio.model';
import { absolutePath } from './censo-servicio.route';

@Component({
  selector: 'app-censo-servicio-list',
  templateUrl: './censo-servicio-list.component.html'
})
export class CensoServicioListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() censoServicios: CensoServicio[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private censoServicioService: CensoServicioService,
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
        this.censoServicioService.delete(id).subscribe(response => {
          this.censoServicios = this.censoServicios.filter(censoServicio => censoServicio._id !== id);
        });
      }
    }, (reason) => {});
  }
}

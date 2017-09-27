import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AdmisionObservacionesService } from './admision-observaciones.service';
import { AdmisionObservaciones } from './admision-observaciones.model';
import { absolutePath } from './admision-observaciones.route';

@Component({
  selector: 'app-admision-observaciones-list',
  templateUrl: './admision-observaciones-list.component.html'
})
export class AdmisionObservacionesListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() admisionObservacioness: AdmisionObservaciones[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private admisionObservacionesService: AdmisionObservacionesService,
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
        this.admisionObservacionesService.delete(id).subscribe(response => {
          this.admisionObservacioness = this.admisionObservacioness.filter(admisionObservaciones => admisionObservaciones._id !== id);
        });
      }
    }, (reason) => {});
  }
}

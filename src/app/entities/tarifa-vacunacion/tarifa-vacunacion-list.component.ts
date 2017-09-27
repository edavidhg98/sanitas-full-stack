import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TarifaVacunacionService } from './tarifa-vacunacion.service';
import { TarifaVacunacion } from './tarifa-vacunacion.model';
import { absolutePath } from './tarifa-vacunacion.route';

@Component({
  selector: 'app-tarifa-vacunacion-list',
  templateUrl: './tarifa-vacunacion-list.component.html'
})
export class TarifaVacunacionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tarifaVacunacions: TarifaVacunacion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tarifaVacunacionService: TarifaVacunacionService,
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
        this.tarifaVacunacionService.delete(id).subscribe(response => {
          this.tarifaVacunacions = this.tarifaVacunacions.filter(tarifaVacunacion => tarifaVacunacion._id !== id);
        });
      }
    }, (reason) => {});
  }
}

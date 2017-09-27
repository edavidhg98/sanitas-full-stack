import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoNovedadService } from './tipo-novedad.service';
import { TipoNovedad } from './tipo-novedad.model';
import { absolutePath } from './tipo-novedad.route';

@Component({
  selector: 'app-tipo-novedad-list',
  templateUrl: './tipo-novedad-list.component.html'
})
export class TipoNovedadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoNovedads: TipoNovedad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoNovedadService: TipoNovedadService,
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
        this.tipoNovedadService.delete(id).subscribe(response => {
          this.tipoNovedads = this.tipoNovedads.filter(tipoNovedad => tipoNovedad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

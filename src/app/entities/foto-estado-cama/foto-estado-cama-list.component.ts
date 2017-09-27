import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FotoEstadoCamaService } from './foto-estado-cama.service';
import { FotoEstadoCama } from './foto-estado-cama.model';
import { absolutePath } from './foto-estado-cama.route';

@Component({
  selector: 'app-foto-estado-cama-list',
  templateUrl: './foto-estado-cama-list.component.html'
})
export class FotoEstadoCamaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() fotoEstadoCamas: FotoEstadoCama[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private fotoEstadoCamaService: FotoEstadoCamaService,
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
        this.fotoEstadoCamaService.delete(id).subscribe(response => {
          this.fotoEstadoCamas = this.fotoEstadoCamas.filter(fotoEstadoCama => fotoEstadoCama._id !== id);
        });
      }
    }, (reason) => {});
  }
}

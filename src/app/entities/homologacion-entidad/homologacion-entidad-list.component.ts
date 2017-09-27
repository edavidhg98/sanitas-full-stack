import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HomologacionEntidadService } from './homologacion-entidad.service';
import { HomologacionEntidad } from './homologacion-entidad.model';
import { absolutePath } from './homologacion-entidad.route';

@Component({
  selector: 'app-homologacion-entidad-list',
  templateUrl: './homologacion-entidad-list.component.html'
})
export class HomologacionEntidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() homologacionEntidads: HomologacionEntidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private homologacionEntidadService: HomologacionEntidadService,
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
        this.homologacionEntidadService.delete(id).subscribe(response => {
          this.homologacionEntidads = this.homologacionEntidads.filter(homologacionEntidad => homologacionEntidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

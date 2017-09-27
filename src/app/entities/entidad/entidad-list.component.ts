import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EntidadService } from './entidad.service';
import { Entidad } from './entidad.model';
import { absolutePath } from './entidad.route';

@Component({
  selector: 'app-entidad-list',
  templateUrl: './entidad-list.component.html'
})
export class EntidadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() entidads: Entidad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private entidadService: EntidadService,
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
        this.entidadService.delete(id).subscribe(response => {
          this.entidads = this.entidads.filter(entidad => entidad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

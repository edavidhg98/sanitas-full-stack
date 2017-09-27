import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EntidadAdmisionService } from './entidad-admision.service';
import { EntidadAdmision } from './entidad-admision.model';
import { absolutePath } from './entidad-admision.route';

@Component({
  selector: 'app-entidad-admision-list',
  templateUrl: './entidad-admision-list.component.html'
})
export class EntidadAdmisionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() entidadAdmisions: EntidadAdmision[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private entidadAdmisionService: EntidadAdmisionService,
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
        this.entidadAdmisionService.delete(id).subscribe(response => {
          this.entidadAdmisions = this.entidadAdmisions.filter(entidadAdmision => entidadAdmision._id !== id);
        });
      }
    }, (reason) => {});
  }
}

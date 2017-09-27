import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoAdmisionService } from './tipo-admision.service';
import { TipoAdmision } from './tipo-admision.model';
import { absolutePath } from './tipo-admision.route';

@Component({
  selector: 'app-tipo-admision-list',
  templateUrl: './tipo-admision-list.component.html'
})
export class TipoAdmisionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoAdmisions: TipoAdmision[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoAdmisionService: TipoAdmisionService,
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
        this.tipoAdmisionService.delete(id).subscribe(response => {
          this.tipoAdmisions = this.tipoAdmisions.filter(tipoAdmision => tipoAdmision._id !== id);
        });
      }
    }, (reason) => {});
  }
}

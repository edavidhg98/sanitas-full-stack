import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TrazabilidadAdmisionService } from './trazabilidad-admision.service';
import { TrazabilidadAdmision } from './trazabilidad-admision.model';
import { absolutePath } from './trazabilidad-admision.route';

@Component({
  selector: 'app-trazabilidad-admision-list',
  templateUrl: './trazabilidad-admision-list.component.html'
})
export class TrazabilidadAdmisionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() trazabilidadAdmisions: TrazabilidadAdmision[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private trazabilidadAdmisionService: TrazabilidadAdmisionService,
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
        this.trazabilidadAdmisionService.delete(id).subscribe(response => {
          this.trazabilidadAdmisions = this.trazabilidadAdmisions.filter(trazabilidadAdmision => trazabilidadAdmision._id !== id);
        });
      }
    }, (reason) => {});
  }
}

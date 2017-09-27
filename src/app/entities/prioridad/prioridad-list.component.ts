import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PrioridadService } from './prioridad.service';
import { Prioridad } from './prioridad.model';
import { absolutePath } from './prioridad.route';

@Component({
  selector: 'app-prioridad-list',
  templateUrl: './prioridad-list.component.html'
})
export class PrioridadListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() prioridads: Prioridad[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private prioridadService: PrioridadService,
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
        this.prioridadService.delete(id).subscribe(response => {
          this.prioridads = this.prioridads.filter(prioridad => prioridad._id !== id);
        });
      }
    }, (reason) => {});
  }
}

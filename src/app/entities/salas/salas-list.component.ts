import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SalasService } from './salas.service';
import { Salas } from './salas.model';
import { absolutePath } from './salas.route';

@Component({
  selector: 'app-salas-list',
  templateUrl: './salas-list.component.html'
})
export class SalasListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() salass: Salas[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private salasService: SalasService,
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
        this.salasService.delete(id).subscribe(response => {
          this.salass = this.salass.filter(salas => salas._id !== id);
        });
      }
    }, (reason) => {});
  }
}

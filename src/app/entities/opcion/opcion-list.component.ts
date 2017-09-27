import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { OpcionService } from './opcion.service';
import { Opcion } from './opcion.model';
import { absolutePath } from './opcion.route';

@Component({
  selector: 'app-opcion-list',
  templateUrl: './opcion-list.component.html'
})
export class OpcionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() opcions: Opcion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private opcionService: OpcionService,
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
        this.opcionService.delete(id).subscribe(response => {
          this.opcions = this.opcions.filter(opcion => opcion._id !== id);
        });
      }
    }, (reason) => {});
  }
}

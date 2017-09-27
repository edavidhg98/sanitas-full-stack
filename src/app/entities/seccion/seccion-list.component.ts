import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { SeccionService } from './seccion.service';
import { Seccion } from './seccion.model';
import { absolutePath } from './seccion.route';

@Component({
  selector: 'app-seccion-list',
  templateUrl: './seccion-list.component.html'
})
export class SeccionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() seccions: Seccion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private seccionService: SeccionService,
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
        this.seccionService.delete(id).subscribe(response => {
          this.seccions = this.seccions.filter(seccion => seccion._id !== id);
        });
      }
    }, (reason) => {});
  }
}

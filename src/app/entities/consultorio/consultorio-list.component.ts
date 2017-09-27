import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConsultorioService } from './consultorio.service';
import { Consultorio } from './consultorio.model';
import { absolutePath } from './consultorio.route';

@Component({
  selector: 'app-consultorio-list',
  templateUrl: './consultorio-list.component.html'
})
export class ConsultorioListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() consultorios: Consultorio[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private consultorioService: ConsultorioService,
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
        this.consultorioService.delete(id).subscribe(response => {
          this.consultorios = this.consultorios.filter(consultorio => consultorio._id !== id);
        });
      }
    }, (reason) => {});
  }
}

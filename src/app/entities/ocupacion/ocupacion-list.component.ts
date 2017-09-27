import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { OcupacionService } from './ocupacion.service';
import { Ocupacion } from './ocupacion.model';
import { absolutePath } from './ocupacion.route';

@Component({
  selector: 'app-ocupacion-list',
  templateUrl: './ocupacion-list.component.html'
})
export class OcupacionListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() ocupacions: Ocupacion[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private ocupacionService: OcupacionService,
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
        this.ocupacionService.delete(id).subscribe(response => {
          this.ocupacions = this.ocupacions.filter(ocupacion => ocupacion._id !== id);
        });
      }
    }, (reason) => {});
  }
}

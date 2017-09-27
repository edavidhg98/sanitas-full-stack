import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ExcepcionRegargoService } from './excepcion-regargo.service';
import { ExcepcionRegargo } from './excepcion-regargo.model';
import { absolutePath } from './excepcion-regargo.route';

@Component({
  selector: 'app-excepcion-regargo-list',
  templateUrl: './excepcion-regargo-list.component.html'
})
export class ExcepcionRegargoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() excepcionRegargos: ExcepcionRegargo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private excepcionRegargoService: ExcepcionRegargoService,
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
        this.excepcionRegargoService.delete(id).subscribe(response => {
          this.excepcionRegargos = this.excepcionRegargos.filter(excepcionRegargo => excepcionRegargo._id !== id);
        });
      }
    }, (reason) => {});
  }
}

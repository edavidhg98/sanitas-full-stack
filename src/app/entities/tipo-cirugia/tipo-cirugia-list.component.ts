import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoCirugiaService } from './tipo-cirugia.service';
import { TipoCirugia } from './tipo-cirugia.model';
import { absolutePath } from './tipo-cirugia.route';

@Component({
  selector: 'app-tipo-cirugia-list',
  templateUrl: './tipo-cirugia-list.component.html'
})
export class TipoCirugiaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoCirugias: TipoCirugia[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoCirugiaService: TipoCirugiaService,
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
        this.tipoCirugiaService.delete(id).subscribe(response => {
          this.tipoCirugias = this.tipoCirugias.filter(tipoCirugia => tipoCirugia._id !== id);
        });
      }
    }, (reason) => {});
  }
}

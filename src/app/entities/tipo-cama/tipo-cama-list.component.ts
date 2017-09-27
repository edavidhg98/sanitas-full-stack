import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoCamaService } from './tipo-cama.service';
import { TipoCama } from './tipo-cama.model';
import { absolutePath } from './tipo-cama.route';

@Component({
  selector: 'app-tipo-cama-list',
  templateUrl: './tipo-cama-list.component.html'
})
export class TipoCamaListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoCamas: TipoCama[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoCamaService: TipoCamaService,
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
        this.tipoCamaService.delete(id).subscribe(response => {
          this.tipoCamas = this.tipoCamas.filter(tipoCama => tipoCama._id !== id);
        });
      }
    }, (reason) => {});
  }
}

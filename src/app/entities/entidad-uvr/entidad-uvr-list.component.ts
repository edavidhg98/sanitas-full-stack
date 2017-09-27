import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EntidadUvrService } from './entidad-uvr.service';
import { EntidadUvr } from './entidad-uvr.model';
import { absolutePath } from './entidad-uvr.route';

@Component({
  selector: 'app-entidad-uvr-list',
  templateUrl: './entidad-uvr-list.component.html'
})
export class EntidadUvrListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() entidadUvrs: EntidadUvr[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private entidadUvrService: EntidadUvrService,
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
        this.entidadUvrService.delete(id).subscribe(response => {
          this.entidadUvrs = this.entidadUvrs.filter(entidadUvr => entidadUvr._id !== id);
        });
      }
    }, (reason) => {});
  }
}

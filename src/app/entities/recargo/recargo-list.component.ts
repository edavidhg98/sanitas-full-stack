import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RecargoService } from './recargo.service';
import { Recargo } from './recargo.model';
import { absolutePath } from './recargo.route';

@Component({
  selector: 'app-recargo-list',
  templateUrl: './recargo-list.component.html'
})
export class RecargoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() recargos: Recargo[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private recargoService: RecargoService,
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
        this.recargoService.delete(id).subscribe(response => {
          this.recargos = this.recargos.filter(recargo => recargo._id !== id);
        });
      }
    }, (reason) => {});
  }
}

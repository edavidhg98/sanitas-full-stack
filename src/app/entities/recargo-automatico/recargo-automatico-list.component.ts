import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RecargoAutomaticoService } from './recargo-automatico.service';
import { RecargoAutomatico } from './recargo-automatico.model';
import { absolutePath } from './recargo-automatico.route';

@Component({
  selector: 'app-recargo-automatico-list',
  templateUrl: './recargo-automatico-list.component.html'
})
export class RecargoAutomaticoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() recargoAutomaticos: RecargoAutomatico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private recargoAutomaticoService: RecargoAutomaticoService,
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
        this.recargoAutomaticoService.delete(id).subscribe(response => {
          this.recargoAutomaticos = this.recargoAutomaticos.filter(recargoAutomatico => recargoAutomatico._id !== id);
        });
      }
    }, (reason) => {});
  }
}

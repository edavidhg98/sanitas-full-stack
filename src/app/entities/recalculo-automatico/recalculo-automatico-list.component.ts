import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { RecalculoAutomaticoService } from './recalculo-automatico.service';
import { RecalculoAutomatico } from './recalculo-automatico.model';
import { absolutePath } from './recalculo-automatico.route';

@Component({
  selector: 'app-recalculo-automatico-list',
  templateUrl: './recalculo-automatico-list.component.html'
})
export class RecalculoAutomaticoListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() recalculoAutomaticos: RecalculoAutomatico[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private recalculoAutomaticoService: RecalculoAutomaticoService,
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
        this.recalculoAutomaticoService.delete(id).subscribe(response => {
          this.recalculoAutomaticos = this.recalculoAutomaticos.filter(recalculoAutomatico => recalculoAutomatico._id !== id);
        });
      }
    }, (reason) => {});
  }
}

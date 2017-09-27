import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { TipoPlanService } from './tipo-plan.service';
import { TipoPlan } from './tipo-plan.model';
import { absolutePath } from './tipo-plan.route';

@Component({
  selector: 'app-tipo-plan-list',
  templateUrl: './tipo-plan-list.component.html'
})
export class TipoPlanListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() tipoPlans: TipoPlan[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private tipoPlanService: TipoPlanService,
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
        this.tipoPlanService.delete(id).subscribe(response => {
          this.tipoPlans = this.tipoPlans.filter(tipoPlan => tipoPlan._id !== id);
        });
      }
    }, (reason) => {});
  }
}

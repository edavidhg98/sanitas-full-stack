import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CamaPlanService } from './cama-plan.service';
import { CamaPlan } from './cama-plan.model';
import { absolutePath } from './cama-plan.route';

@Component({
  selector: 'app-cama-plan-list',
  templateUrl: './cama-plan-list.component.html'
})
export class CamaPlanListComponent implements OnInit {

  deleteModalOpts = { ok: 'OK', cancel: 'CANCEL' };
  absolutePath: string = absolutePath;

  @Input() camaPlans: CamaPlan[];

  // Necesarios para el ordernamiento
  isDesc = false;
  column: string;
  direction: number;

  constructor(
    private camaPlanService: CamaPlanService,
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
        this.camaPlanService.delete(id).subscribe(response => {
          this.camaPlans = this.camaPlans.filter(camaPlan => camaPlan._id !== id);
        });
      }
    }, (reason) => {});
  }
}

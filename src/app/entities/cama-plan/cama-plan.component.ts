import { Component, OnInit, Inject } from '@angular/core';

import { CamaPlanService } from './cama-plan.service';
import { CamaPlan } from './cama-plan.model';

@Component({
  selector: 'app-cama-plan',
  template: `
              <div class="container-fluid">
                <app-cama-plan-list [camaPlans]="camaPlans"></app-cama-plan-list>
              </div>
            `
})
export class CamaPlanComponent implements OnInit {

  camaPlans: CamaPlan[] = [];

  constructor(private camaPlanService: CamaPlanService) {

  }

  ngOnInit() {
    this.camaPlanService.getAll().subscribe(camaPlans => this.camaPlans = camaPlans);
  }
}

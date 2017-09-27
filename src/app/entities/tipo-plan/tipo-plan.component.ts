import { Component, OnInit, Inject } from '@angular/core';

import { TipoPlanService } from './tipo-plan.service';
import { TipoPlan } from './tipo-plan.model';

@Component({
  selector: 'app-tipo-plan',
  template: `
              <div class="container-fluid">
                <app-tipo-plan-list [tipoPlans]="tipoPlans"></app-tipo-plan-list>
              </div>
            `
})
export class TipoPlanComponent implements OnInit {

  tipoPlans: TipoPlan[] = [];

  constructor(private tipoPlanService: TipoPlanService) {

  }

  ngOnInit() {
    this.tipoPlanService.getAll().subscribe(tipoPlans => this.tipoPlans = tipoPlans);
  }
}

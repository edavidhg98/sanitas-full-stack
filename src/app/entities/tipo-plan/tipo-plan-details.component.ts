import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoPlan } from './tipo-plan.model';
import { TipoPlanService } from './tipo-plan.service';

@Component({
  selector: 'app-tipo-plan-details',
  templateUrl: './tipo-plan-details.component.html'
})
export class TipoPlanDetailsComponent implements OnInit {

  tipoPlan: TipoPlan;

    constructor(
      private tipoPlanService: TipoPlanService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoPlanService.getById(id).subscribe(tipoPlan => this.tipoPlan = tipoPlan);
      });
    }
  }

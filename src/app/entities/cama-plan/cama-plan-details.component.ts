import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CamaPlan } from './cama-plan.model';
import { CamaPlanService } from './cama-plan.service';

@Component({
  selector: 'app-cama-plan-details',
  templateUrl: './cama-plan-details.component.html'
})
export class CamaPlanDetailsComponent implements OnInit {

  camaPlan: CamaPlan;

    constructor(
      private camaPlanService: CamaPlanService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.camaPlanService.getById(id).subscribe(camaPlan => this.camaPlan = camaPlan);
      });
    }
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedimientosRis } from './procedimientos-ris.model';
import { ProcedimientosRisService } from './procedimientos-ris.service';

@Component({
  selector: 'app-procedimientos-ris-details',
  templateUrl: './procedimientos-ris-details.component.html'
})
export class ProcedimientosRisDetailsComponent implements OnInit {

  procedimientosRis: ProcedimientosRis;

    constructor(
      private procedimientosRisService: ProcedimientosRisService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientosRisService.getById(id).subscribe(procedimientosRis => this.procedimientosRis = procedimientosRis);
      });
    }
  }

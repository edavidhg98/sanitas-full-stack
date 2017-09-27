import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Procedimiento } from './procedimiento.model';
import { ProcedimientoService } from './procedimiento.service';

@Component({
  selector: 'app-procedimiento-details',
  templateUrl: './procedimiento-details.component.html'
})
export class ProcedimientoDetailsComponent implements OnInit {

  procedimiento: Procedimiento;

    constructor(
      private procedimientoService: ProcedimientoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientoService.getById(id).subscribe(procedimiento => this.procedimiento = procedimiento);
      });
    }
  }

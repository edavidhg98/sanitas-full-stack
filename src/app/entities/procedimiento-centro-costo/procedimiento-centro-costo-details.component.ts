import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedimientoCentroCosto } from './procedimiento-centro-costo.model';
import { ProcedimientoCentroCostoService } from './procedimiento-centro-costo.service';

@Component({
  selector: 'app-procedimiento-centro-costo-details',
  templateUrl: './procedimiento-centro-costo-details.component.html'
})
export class ProcedimientoCentroCostoDetailsComponent implements OnInit {

  procedimientoCentroCosto: ProcedimientoCentroCosto;

    constructor(
      private procedimientoCentroCostoService: ProcedimientoCentroCostoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientoCentroCostoService.getById(id).subscribe(procedimientoCentroCosto => this.procedimientoCentroCosto = procedimientoCentroCosto);
      });
    }
  }

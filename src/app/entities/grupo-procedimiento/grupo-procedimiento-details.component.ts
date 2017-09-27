import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GrupoProcedimiento } from './grupo-procedimiento.model';
import { GrupoProcedimientoService } from './grupo-procedimiento.service';

@Component({
  selector: 'app-grupo-procedimiento-details',
  templateUrl: './grupo-procedimiento-details.component.html'
})
export class GrupoProcedimientoDetailsComponent implements OnInit {

  grupoProcedimiento: GrupoProcedimiento;

    constructor(
      private grupoProcedimientoService: GrupoProcedimientoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.grupoProcedimientoService.getById(id).subscribe(grupoProcedimiento => this.grupoProcedimiento = grupoProcedimiento);
      });
    }
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubGrupoProcedimiento } from './sub-grupo-procedimiento.model';
import { SubGrupoProcedimientoService } from './sub-grupo-procedimiento.service';

@Component({
  selector: 'app-sub-grupo-procedimiento-details',
  templateUrl: './sub-grupo-procedimiento-details.component.html'
})
export class SubGrupoProcedimientoDetailsComponent implements OnInit {

  subGrupoProcedimiento: SubGrupoProcedimiento;

    constructor(
      private subGrupoProcedimientoService: SubGrupoProcedimientoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.subGrupoProcedimientoService.getById(id).subscribe(subGrupoProcedimiento => this.subGrupoProcedimiento = subGrupoProcedimiento);
      });
    }
  }

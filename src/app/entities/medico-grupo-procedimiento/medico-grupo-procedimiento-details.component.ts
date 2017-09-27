import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MedicoGrupoProcedimiento } from './medico-grupo-procedimiento.model';
import { MedicoGrupoProcedimientoService } from './medico-grupo-procedimiento.service';

@Component({
  selector: 'app-medico-grupo-procedimiento-details',
  templateUrl: './medico-grupo-procedimiento-details.component.html'
})
export class MedicoGrupoProcedimientoDetailsComponent implements OnInit {

  medicoGrupoProcedimiento: MedicoGrupoProcedimiento;

    constructor(
      private medicoGrupoProcedimientoService: MedicoGrupoProcedimientoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.medicoGrupoProcedimientoService.getById(id).subscribe(medicoGrupoProcedimiento => this.medicoGrupoProcedimiento = medicoGrupoProcedimiento);
      });
    }
  }

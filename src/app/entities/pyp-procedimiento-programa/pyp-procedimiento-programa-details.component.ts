import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PypProcedimientoPrograma } from './pyp-procedimiento-programa.model';
import { PypProcedimientoProgramaService } from './pyp-procedimiento-programa.service';

@Component({
  selector: 'app-pyp-procedimiento-programa-details',
  templateUrl: './pyp-procedimiento-programa-details.component.html'
})
export class PypProcedimientoProgramaDetailsComponent implements OnInit {

  pypProcedimientoPrograma: PypProcedimientoPrograma;

    constructor(
      private pypProcedimientoProgramaService: PypProcedimientoProgramaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.pypProcedimientoProgramaService.getById(id).subscribe(pypProcedimientoPrograma => this.pypProcedimientoPrograma = pypProcedimientoPrograma);
      });
    }
  }

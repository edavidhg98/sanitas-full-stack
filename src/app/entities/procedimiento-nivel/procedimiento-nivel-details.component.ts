import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProcedimientoNivel } from './procedimiento-nivel.model';
import { ProcedimientoNivelService } from './procedimiento-nivel.service';

@Component({
  selector: 'app-procedimiento-nivel-details',
  templateUrl: './procedimiento-nivel-details.component.html'
})
export class ProcedimientoNivelDetailsComponent implements OnInit {

  procedimientoNivel: ProcedimientoNivel;

    constructor(
      private procedimientoNivelService: ProcedimientoNivelService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.procedimientoNivelService.getById(id).subscribe(procedimientoNivel => this.procedimientoNivel = procedimientoNivel);
      });
    }
  }

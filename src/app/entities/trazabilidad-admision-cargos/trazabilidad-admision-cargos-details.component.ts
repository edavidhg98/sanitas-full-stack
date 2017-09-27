import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrazabilidadAdmisionCargos } from './trazabilidad-admision-cargos.model';
import { TrazabilidadAdmisionCargosService } from './trazabilidad-admision-cargos.service';

@Component({
  selector: 'app-trazabilidad-admision-cargos-details',
  templateUrl: './trazabilidad-admision-cargos-details.component.html'
})
export class TrazabilidadAdmisionCargosDetailsComponent implements OnInit {

  trazabilidadAdmisionCargos: TrazabilidadAdmisionCargos;

    constructor(
      private trazabilidadAdmisionCargosService: TrazabilidadAdmisionCargosService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.trazabilidadAdmisionCargosService.getById(id).subscribe(trazabilidadAdmisionCargos => this.trazabilidadAdmisionCargos = trazabilidadAdmisionCargos);
      });
    }
  }

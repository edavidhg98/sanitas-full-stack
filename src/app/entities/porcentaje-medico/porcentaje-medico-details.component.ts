import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PorcentajeMedico } from './porcentaje-medico.model';
import { PorcentajeMedicoService } from './porcentaje-medico.service';

@Component({
  selector: 'app-porcentaje-medico-details',
  templateUrl: './porcentaje-medico-details.component.html'
})
export class PorcentajeMedicoDetailsComponent implements OnInit {

  porcentajeMedico: PorcentajeMedico;

    constructor(
      private porcentajeMedicoService: PorcentajeMedicoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.porcentajeMedicoService.getById(id).subscribe(porcentajeMedico => this.porcentajeMedico = porcentajeMedico);
      });
    }
  }

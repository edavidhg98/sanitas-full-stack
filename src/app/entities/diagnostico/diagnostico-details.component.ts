import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Diagnostico } from './diagnostico.model';
import { DiagnosticoService } from './diagnostico.service';

@Component({
  selector: 'app-diagnostico-details',
  templateUrl: './diagnostico-details.component.html'
})
export class DiagnosticoDetailsComponent implements OnInit {

  diagnostico: Diagnostico;

    constructor(
      private diagnosticoService: DiagnosticoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.diagnosticoService.getById(id).subscribe(diagnostico => this.diagnostico = diagnostico);
      });
    }
  }

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NumeroSecuencia } from './numero-secuencia.model';
import { NumeroSecuenciaService } from './numero-secuencia.service';

@Component({
  selector: 'app-numero-secuencia-details',
  templateUrl: './numero-secuencia-details.component.html'
})
export class NumeroSecuenciaDetailsComponent implements OnInit {

  numeroSecuencia: NumeroSecuencia;

    constructor(
      private numeroSecuenciaService: NumeroSecuenciaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.numeroSecuenciaService.getById(id).subscribe(numeroSecuencia => this.numeroSecuencia = numeroSecuencia);
      });
    }
  }

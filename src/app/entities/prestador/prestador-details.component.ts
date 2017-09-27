import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Prestador } from './prestador.model';
import { PrestadorService } from './prestador.service';

@Component({
  selector: 'app-prestador-details',
  templateUrl: './prestador-details.component.html'
})
export class PrestadorDetailsComponent implements OnInit {

  prestador: Prestador;

    constructor(
      private prestadorService: PrestadorService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.prestadorService.getById(id).subscribe(prestador => this.prestador = prestador);
      });
    }
  }

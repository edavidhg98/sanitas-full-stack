import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ZonaHoraria } from './zona-horaria.model';
import { ZonaHorariaService } from './zona-horaria.service';

@Component({
  selector: 'app-zona-horaria-details',
  templateUrl: './zona-horaria-details.component.html'
})
export class ZonaHorariaDetailsComponent implements OnInit {

  zonaHoraria: ZonaHoraria;

    constructor(
      private zonaHorariaService: ZonaHorariaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.zonaHorariaService.getById(id).subscribe(zonaHoraria => this.zonaHoraria = zonaHoraria);
      });
    }
  }

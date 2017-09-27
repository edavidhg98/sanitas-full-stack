import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vacunas } from './vacunas.model';
import { VacunasService } from './vacunas.service';

@Component({
  selector: 'app-vacunas-details',
  templateUrl: './vacunas-details.component.html'
})
export class VacunasDetailsComponent implements OnInit {

  vacunas: Vacunas;

    constructor(
      private vacunasService: VacunasService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.vacunasService.getById(id).subscribe(vacunas => this.vacunas = vacunas);
      });
    }
  }

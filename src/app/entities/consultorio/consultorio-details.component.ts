import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Consultorio } from './consultorio.model';
import { ConsultorioService } from './consultorio.service';

@Component({
  selector: 'app-consultorio-details',
  templateUrl: './consultorio-details.component.html'
})
export class ConsultorioDetailsComponent implements OnInit {

  consultorio: Consultorio;

    constructor(
      private consultorioService: ConsultorioService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.consultorioService.getById(id).subscribe(consultorio => this.consultorio = consultorio);
      });
    }
  }

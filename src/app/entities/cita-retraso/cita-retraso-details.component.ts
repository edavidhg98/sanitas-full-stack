import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CitaRetraso } from './cita-retraso.model';
import { CitaRetrasoService } from './cita-retraso.service';

@Component({
  selector: 'app-cita-retraso-details',
  templateUrl: './cita-retraso-details.component.html'
})
export class CitaRetrasoDetailsComponent implements OnInit {

  citaRetraso: CitaRetraso;

    constructor(
      private citaRetrasoService: CitaRetrasoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.citaRetrasoService.getById(id).subscribe(citaRetraso => this.citaRetraso = citaRetraso);
      });
    }
  }

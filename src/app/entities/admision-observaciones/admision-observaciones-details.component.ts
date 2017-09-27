import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdmisionObservaciones } from './admision-observaciones.model';
import { AdmisionObservacionesService } from './admision-observaciones.service';

@Component({
  selector: 'app-admision-observaciones-details',
  templateUrl: './admision-observaciones-details.component.html'
})
export class AdmisionObservacionesDetailsComponent implements OnInit {

  admisionObservaciones: AdmisionObservaciones;

    constructor(
      private admisionObservacionesService: AdmisionObservacionesService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.admisionObservacionesService.getById(id).subscribe(admisionObservaciones => this.admisionObservaciones = admisionObservaciones);
      });
    }
  }

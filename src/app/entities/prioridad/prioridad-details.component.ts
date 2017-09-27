import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Prioridad } from './prioridad.model';
import { PrioridadService } from './prioridad.service';

@Component({
  selector: 'app-prioridad-details',
  templateUrl: './prioridad-details.component.html'
})
export class PrioridadDetailsComponent implements OnInit {

  prioridad: Prioridad;

    constructor(
      private prioridadService: PrioridadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.prioridadService.getById(id).subscribe(prioridad => this.prioridad = prioridad);
      });
    }
  }

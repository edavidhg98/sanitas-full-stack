import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ocupacion } from './ocupacion.model';
import { OcupacionService } from './ocupacion.service';

@Component({
  selector: 'app-ocupacion-details',
  templateUrl: './ocupacion-details.component.html'
})
export class OcupacionDetailsComponent implements OnInit {

  ocupacion: Ocupacion;

    constructor(
      private ocupacionService: OcupacionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.ocupacionService.getById(id).subscribe(ocupacion => this.ocupacion = ocupacion);
      });
    }
  }

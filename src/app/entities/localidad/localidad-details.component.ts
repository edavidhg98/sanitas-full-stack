import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Localidad } from './localidad.model';
import { LocalidadService } from './localidad.service';

@Component({
  selector: 'app-localidad-details',
  templateUrl: './localidad-details.component.html'
})
export class LocalidadDetailsComponent implements OnInit {

  localidad: Localidad;

    constructor(
      private localidadService: LocalidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.localidadService.getById(id).subscribe(localidad => this.localidad = localidad);
      });
    }
  }

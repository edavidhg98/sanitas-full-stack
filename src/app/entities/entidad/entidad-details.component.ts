import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entidad } from './entidad.model';
import { EntidadService } from './entidad.service';

@Component({
  selector: 'app-entidad-details',
  templateUrl: './entidad-details.component.html'
})
export class EntidadDetailsComponent implements OnInit {

  entidad: Entidad;

    constructor(
      private entidadService: EntidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.entidadService.getById(id).subscribe(entidad => this.entidad = entidad);
      });
    }
  }

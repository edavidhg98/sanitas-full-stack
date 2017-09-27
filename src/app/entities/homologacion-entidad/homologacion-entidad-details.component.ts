import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HomologacionEntidad } from './homologacion-entidad.model';
import { HomologacionEntidadService } from './homologacion-entidad.service';

@Component({
  selector: 'app-homologacion-entidad-details',
  templateUrl: './homologacion-entidad-details.component.html'
})
export class HomologacionEntidadDetailsComponent implements OnInit {

  homologacionEntidad: HomologacionEntidad;

    constructor(
      private homologacionEntidadService: HomologacionEntidadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.homologacionEntidadService.getById(id).subscribe(homologacionEntidad => this.homologacionEntidad = homologacionEntidad);
      });
    }
  }

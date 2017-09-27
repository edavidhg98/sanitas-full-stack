import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Institucion } from './institucion.model';
import { InstitucionService } from './institucion.service';

@Component({
  selector: 'app-institucion-details',
  templateUrl: './institucion-details.component.html'
})
export class InstitucionDetailsComponent implements OnInit {

  institucion: Institucion;

    constructor(
      private institucionService: InstitucionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.institucionService.getById(id).subscribe(institucion => this.institucion = institucion);
      });
    }
  }

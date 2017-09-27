import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Seccion } from './seccion.model';
import { SeccionService } from './seccion.service';

@Component({
  selector: 'app-seccion-details',
  templateUrl: './seccion-details.component.html'
})
export class SeccionDetailsComponent implements OnInit {

  seccion: Seccion;

    constructor(
      private seccionService: SeccionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.seccionService.getById(id).subscribe(seccion => this.seccion = seccion);
      });
    }
  }

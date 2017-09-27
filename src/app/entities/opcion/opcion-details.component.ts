import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Opcion } from './opcion.model';
import { OpcionService } from './opcion.service';

@Component({
  selector: 'app-opcion-details',
  templateUrl: './opcion-details.component.html'
})
export class OpcionDetailsComponent implements OnInit {

  opcion: Opcion;

    constructor(
      private opcionService: OpcionService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.opcionService.getById(id).subscribe(opcion => this.opcion = opcion);
      });
    }
  }

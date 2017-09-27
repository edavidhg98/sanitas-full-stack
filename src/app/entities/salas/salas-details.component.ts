import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Salas } from './salas.model';
import { SalasService } from './salas.service';

@Component({
  selector: 'app-salas-details',
  templateUrl: './salas-details.component.html'
})
export class SalasDetailsComponent implements OnInit {

  salas: Salas;

    constructor(
      private salasService: SalasService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.salasService.getById(id).subscribe(salas => this.salas = salas);
      });
    }
  }

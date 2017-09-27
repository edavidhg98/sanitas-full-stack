import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pais } from './pais.model';
import { PaisService } from './pais.service';

@Component({
  selector: 'app-pais-details',
  templateUrl: './pais-details.component.html'
})
export class PaisDetailsComponent implements OnInit {

  pais: Pais;

    constructor(
      private paisService: PaisService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.paisService.getById(id).subscribe(pais => this.pais = pais);
      });
    }
  }

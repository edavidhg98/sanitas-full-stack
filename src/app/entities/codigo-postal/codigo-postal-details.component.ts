import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CodigoPostal } from './codigo-postal.model';
import { CodigoPostalService } from './codigo-postal.service';

@Component({
  selector: 'app-codigo-postal-details',
  templateUrl: './codigo-postal-details.component.html'
})
export class CodigoPostalDetailsComponent implements OnInit {

  codigoPostal: CodigoPostal;

    constructor(
      private codigoPostalService: CodigoPostalService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.codigoPostalService.getById(id).subscribe(codigoPostal => this.codigoPostal = codigoPostal);
      });
    }
  }

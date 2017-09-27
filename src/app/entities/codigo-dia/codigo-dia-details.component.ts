import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CodigoDia } from './codigo-dia.model';
import { CodigoDiaService } from './codigo-dia.service';

@Component({
  selector: 'app-codigo-dia-details',
  templateUrl: './codigo-dia-details.component.html'
})
export class CodigoDiaDetailsComponent implements OnInit {

  codigoDia: CodigoDia;

    constructor(
      private codigoDiaService: CodigoDiaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.codigoDiaService.getById(id).subscribe(codigoDia => this.codigoDia = codigoDia);
      });
    }
  }

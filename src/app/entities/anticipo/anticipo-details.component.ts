import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Anticipo } from './anticipo.model';
import { AnticipoService } from './anticipo.service';

@Component({
  selector: 'app-anticipo-details',
  templateUrl: './anticipo-details.component.html'
})
export class AnticipoDetailsComponent implements OnInit {

  anticipo: Anticipo;

    constructor(
      private anticipoService: AnticipoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.anticipoService.getById(id).subscribe(anticipo => this.anticipo = anticipo);
      });
    }
  }

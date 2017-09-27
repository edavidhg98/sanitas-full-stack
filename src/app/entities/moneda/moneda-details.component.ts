import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Moneda } from './moneda.model';
import { MonedaService } from './moneda.service';

@Component({
  selector: 'app-moneda-details',
  templateUrl: './moneda-details.component.html'
})
export class MonedaDetailsComponent implements OnInit {

  moneda: Moneda;

    constructor(
      private monedaService: MonedaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.monedaService.getById(id).subscribe(moneda => this.moneda = moneda);
      });
    }
  }

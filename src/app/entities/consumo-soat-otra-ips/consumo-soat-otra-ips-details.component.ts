import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsumoSoatOtraIps } from './consumo-soat-otra-ips.model';
import { ConsumoSoatOtraIpsService } from './consumo-soat-otra-ips.service';

@Component({
  selector: 'app-consumo-soat-otra-ips-details',
  templateUrl: './consumo-soat-otra-ips-details.component.html'
})
export class ConsumoSoatOtraIpsDetailsComponent implements OnInit {

  consumoSoatOtraIps: ConsumoSoatOtraIps;

    constructor(
      private consumoSoatOtraIpsService: ConsumoSoatOtraIpsService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.consumoSoatOtraIpsService.getById(id).subscribe(consumoSoatOtraIps => this.consumoSoatOtraIps = consumoSoatOtraIps);
      });
    }
  }

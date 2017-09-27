import { Component, OnInit, Inject } from '@angular/core';

import { ConsumoSoatOtraIpsService } from './consumo-soat-otra-ips.service';
import { ConsumoSoatOtraIps } from './consumo-soat-otra-ips.model';

@Component({
  selector: 'app-consumo-soat-otra-ips',
  template: `
              <div class="container-fluid">
                <app-consumo-soat-otra-ips-list [consumoSoatOtraIpss]="consumoSoatOtraIpss"></app-consumo-soat-otra-ips-list>
              </div>
            `
})
export class ConsumoSoatOtraIpsComponent implements OnInit {

  consumoSoatOtraIpss: ConsumoSoatOtraIps[] = [];

  constructor(private consumoSoatOtraIpsService: ConsumoSoatOtraIpsService) {

  }

  ngOnInit() {
    this.consumoSoatOtraIpsService.getAll().subscribe(consumoSoatOtraIpss => this.consumoSoatOtraIpss = consumoSoatOtraIpss);
  }
}

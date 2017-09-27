import { Component, OnInit, Inject } from '@angular/core';

import { CensoHistoricoService } from './censo-historico.service';
import { CensoHistorico } from './censo-historico.model';

@Component({
  selector: 'app-censo-historico',
  template: `
              <div class="container-fluid">
                <app-censo-historico-list [censoHistoricos]="censoHistoricos"></app-censo-historico-list>
              </div>
            `
})
export class CensoHistoricoComponent implements OnInit {

  censoHistoricos: CensoHistorico[] = [];

  constructor(private censoHistoricoService: CensoHistoricoService) {

  }

  ngOnInit() {
    this.censoHistoricoService.getAll().subscribe(censoHistoricos => this.censoHistoricos = censoHistoricos);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CensoHistorico } from './censo-historico.model';
import { CensoHistoricoService } from './censo-historico.service';

@Component({
  selector: 'app-censo-historico-details',
  templateUrl: './censo-historico-details.component.html'
})
export class CensoHistoricoDetailsComponent implements OnInit {

  censoHistorico: CensoHistorico;

    constructor(
      private censoHistoricoService: CensoHistoricoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.censoHistoricoService.getById(id).subscribe(censoHistorico => this.censoHistorico = censoHistorico);
      });
    }
  }

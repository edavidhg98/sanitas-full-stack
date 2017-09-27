import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ConsultaExternaPyp } from './consulta-externa-pyp.model';
import { ConsultaExternaPypService } from './consulta-externa-pyp.service';

@Component({
  selector: 'app-consulta-externa-pyp-details',
  templateUrl: './consulta-externa-pyp-details.component.html'
})
export class ConsultaExternaPypDetailsComponent implements OnInit {

  consultaExternaPyp: ConsultaExternaPyp;

    constructor(
      private consultaExternaPypService: ConsultaExternaPypService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.consultaExternaPypService.getById(id).subscribe(consultaExternaPyp => this.consultaExternaPyp = consultaExternaPyp);
      });
    }
  }

import { Component, OnInit, Inject } from '@angular/core';

import { ConsultaExternaPypService } from './consulta-externa-pyp.service';
import { ConsultaExternaPyp } from './consulta-externa-pyp.model';

@Component({
  selector: 'app-consulta-externa-pyp',
  template: `
              <div class="container-fluid">
                <app-consulta-externa-pyp-list [consultaExternaPyps]="consultaExternaPyps"></app-consulta-externa-pyp-list>
              </div>
            `
})
export class ConsultaExternaPypComponent implements OnInit {

  consultaExternaPyps: ConsultaExternaPyp[] = [];

  constructor(private consultaExternaPypService: ConsultaExternaPypService) {

  }

  ngOnInit() {
    this.consultaExternaPypService.getAll().subscribe(consultaExternaPyps => this.consultaExternaPyps = consultaExternaPyps);
  }
}

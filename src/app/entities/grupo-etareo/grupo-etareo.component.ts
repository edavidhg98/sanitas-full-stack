import { Component, OnInit, Inject } from '@angular/core';

import { GrupoEtareoService } from './grupo-etareo.service';
import { GrupoEtareo } from './grupo-etareo.model';

@Component({
  selector: 'app-grupo-etareo',
  template: `
              <div class="container-fluid">
                <app-grupo-etareo-list [grupoEtareos]="grupoEtareos"></app-grupo-etareo-list>
              </div>
            `
})
export class GrupoEtareoComponent implements OnInit {

  grupoEtareos: GrupoEtareo[] = [];

  constructor(private grupoEtareoService: GrupoEtareoService) {

  }

  ngOnInit() {
    this.grupoEtareoService.getAll().subscribe(grupoEtareos => this.grupoEtareos = grupoEtareos);
  }
}

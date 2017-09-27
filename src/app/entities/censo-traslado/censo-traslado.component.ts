import { Component, OnInit, Inject } from '@angular/core';

import { CensoTrasladoService } from './censo-traslado.service';
import { CensoTraslado } from './censo-traslado.model';

@Component({
  selector: 'app-censo-traslado',
  template: `
              <div class="container-fluid">
                <app-censo-traslado-list [censoTraslados]="censoTraslados"></app-censo-traslado-list>
              </div>
            `
})
export class CensoTrasladoComponent implements OnInit {

  censoTraslados: CensoTraslado[] = [];

  constructor(private censoTrasladoService: CensoTrasladoService) {

  }

  ngOnInit() {
    this.censoTrasladoService.getAll().subscribe(censoTraslados => this.censoTraslados = censoTraslados);
  }
}

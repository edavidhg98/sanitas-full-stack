import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientosRisService } from './procedimientos-ris.service';
import { ProcedimientosRis } from './procedimientos-ris.model';

@Component({
  selector: 'app-procedimientos-ris',
  template: `
              <div class="container-fluid">
                <app-procedimientos-ris-list [procedimientosRiss]="procedimientosRiss"></app-procedimientos-ris-list>
              </div>
            `
})
export class ProcedimientosRisComponent implements OnInit {

  procedimientosRiss: ProcedimientosRis[] = [];

  constructor(private procedimientosRisService: ProcedimientosRisService) {

  }

  ngOnInit() {
    this.procedimientosRisService.getAll().subscribe(procedimientosRiss => this.procedimientosRiss = procedimientosRiss);
  }
}

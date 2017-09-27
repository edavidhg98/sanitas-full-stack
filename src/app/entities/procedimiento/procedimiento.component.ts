import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientoService } from './procedimiento.service';
import { Procedimiento } from './procedimiento.model';

@Component({
  selector: 'app-procedimiento',
  template: `
              <div class="container-fluid">
                <app-procedimiento-list [procedimientos]="procedimientos"></app-procedimiento-list>
              </div>
            `
})
export class ProcedimientoComponent implements OnInit {

  procedimientos: Procedimiento[] = [];

  constructor(private procedimientoService: ProcedimientoService) {

  }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
  }
}

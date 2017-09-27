import { Component, OnInit, Inject } from '@angular/core';

import { PypProcedimientoProgramaService } from './pyp-procedimiento-programa.service';
import { PypProcedimientoPrograma } from './pyp-procedimiento-programa.model';

@Component({
  selector: 'app-pyp-procedimiento-programa',
  template: `
              <div class="container-fluid">
                <app-pyp-procedimiento-programa-list [pypProcedimientoProgramas]="pypProcedimientoProgramas"></app-pyp-procedimiento-programa-list>
              </div>
            `
})
export class PypProcedimientoProgramaComponent implements OnInit {

  pypProcedimientoProgramas: PypProcedimientoPrograma[] = [];

  constructor(private pypProcedimientoProgramaService: PypProcedimientoProgramaService) {

  }

  ngOnInit() {
    this.pypProcedimientoProgramaService.getAll().subscribe(pypProcedimientoProgramas => this.pypProcedimientoProgramas = pypProcedimientoProgramas);
  }
}

import { Component, OnInit, Inject } from '@angular/core';

import { MedicoGrupoProcedimientoService } from './medico-grupo-procedimiento.service';
import { MedicoGrupoProcedimiento } from './medico-grupo-procedimiento.model';

@Component({
  selector: 'app-medico-grupo-procedimiento',
  template: `
              <div class="container-fluid">
                <app-medico-grupo-procedimiento-list [medicoGrupoProcedimientos]="medicoGrupoProcedimientos"></app-medico-grupo-procedimiento-list>
              </div>
            `
})
export class MedicoGrupoProcedimientoComponent implements OnInit {

  medicoGrupoProcedimientos: MedicoGrupoProcedimiento[] = [];

  constructor(private medicoGrupoProcedimientoService: MedicoGrupoProcedimientoService) {

  }

  ngOnInit() {
    this.medicoGrupoProcedimientoService.getAll().subscribe(medicoGrupoProcedimientos => this.medicoGrupoProcedimientos = medicoGrupoProcedimientos);
  }
}

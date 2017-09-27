import { Component, OnInit, Inject } from '@angular/core';

import { TrazabilidadAdmisionCargosService } from './trazabilidad-admision-cargos.service';
import { TrazabilidadAdmisionCargos } from './trazabilidad-admision-cargos.model';

@Component({
  selector: 'app-trazabilidad-admision-cargos',
  template: `
              <div class="container-fluid">
                <app-trazabilidad-admision-cargos-list [trazabilidadAdmisionCargoss]="trazabilidadAdmisionCargoss"></app-trazabilidad-admision-cargos-list>
              </div>
            `
})
export class TrazabilidadAdmisionCargosComponent implements OnInit {

  trazabilidadAdmisionCargoss: TrazabilidadAdmisionCargos[] = [];

  constructor(private trazabilidadAdmisionCargosService: TrazabilidadAdmisionCargosService) {

  }

  ngOnInit() {
    this.trazabilidadAdmisionCargosService.getAll().subscribe(trazabilidadAdmisionCargoss => this.trazabilidadAdmisionCargoss = trazabilidadAdmisionCargoss);
  }
}

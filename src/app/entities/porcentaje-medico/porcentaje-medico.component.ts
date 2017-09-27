import { Component, OnInit, Inject } from '@angular/core';

import { PorcentajeMedicoService } from './porcentaje-medico.service';
import { PorcentajeMedico } from './porcentaje-medico.model';

@Component({
  selector: 'app-porcentaje-medico',
  template: `
              <div class="container-fluid">
                <app-porcentaje-medico-list [porcentajeMedicos]="porcentajeMedicos"></app-porcentaje-medico-list>
              </div>
            `
})
export class PorcentajeMedicoComponent implements OnInit {

  porcentajeMedicos: PorcentajeMedico[] = [];

  constructor(private porcentajeMedicoService: PorcentajeMedicoService) {

  }

  ngOnInit() {
    this.porcentajeMedicoService.getAll().subscribe(porcentajeMedicos => this.porcentajeMedicos = porcentajeMedicos);
  }
}

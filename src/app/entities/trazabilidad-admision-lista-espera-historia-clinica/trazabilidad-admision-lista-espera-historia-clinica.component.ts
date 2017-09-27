import { Component, OnInit, Inject } from '@angular/core';

import { TrazabilidadAdmisionListaEsperaHistoriaClinicaService } from './trazabilidad-admision-lista-espera-historia-clinica.service';
import { TrazabilidadAdmisionListaEsperaHistoriaClinica } from './trazabilidad-admision-lista-espera-historia-clinica.model';

@Component({
  selector: 'app-trazabilidad-admision-lista-espera-historia-clinica',
  template: `
              <div class="container-fluid">
                <app-trazabilidad-admision-lista-espera-historia-clinica-list [trazabilidadAdmisionListaEsperaHistoriaClinicas]="trazabilidadAdmisionListaEsperaHistoriaClinicas"></app-trazabilidad-admision-lista-espera-historia-clinica-list>
              </div>
            `
})
export class TrazabilidadAdmisionListaEsperaHistoriaClinicaComponent implements OnInit {

  trazabilidadAdmisionListaEsperaHistoriaClinicas: TrazabilidadAdmisionListaEsperaHistoriaClinica[] = [];

  constructor(private trazabilidadAdmisionListaEsperaHistoriaClinicaService: TrazabilidadAdmisionListaEsperaHistoriaClinicaService) {

  }

  ngOnInit() {
    this.trazabilidadAdmisionListaEsperaHistoriaClinicaService.getAll().subscribe(trazabilidadAdmisionListaEsperaHistoriaClinicas => this.trazabilidadAdmisionListaEsperaHistoriaClinicas = trazabilidadAdmisionListaEsperaHistoriaClinicas);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrazabilidadAdmisionListaEsperaHistoriaClinica } from './trazabilidad-admision-lista-espera-historia-clinica.model';
import { TrazabilidadAdmisionListaEsperaHistoriaClinicaService } from './trazabilidad-admision-lista-espera-historia-clinica.service';

@Component({
  selector: 'app-trazabilidad-admision-lista-espera-historia-clinica-details',
  templateUrl: './trazabilidad-admision-lista-espera-historia-clinica-details.component.html'
})
export class TrazabilidadAdmisionListaEsperaHistoriaClinicaDetailsComponent implements OnInit {

  trazabilidadAdmisionListaEsperaHistoriaClinica: TrazabilidadAdmisionListaEsperaHistoriaClinica;

    constructor(
      private trazabilidadAdmisionListaEsperaHistoriaClinicaService: TrazabilidadAdmisionListaEsperaHistoriaClinicaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.trazabilidadAdmisionListaEsperaHistoriaClinicaService.getById(id).subscribe(trazabilidadAdmisionListaEsperaHistoriaClinica => this.trazabilidadAdmisionListaEsperaHistoriaClinica = trazabilidadAdmisionListaEsperaHistoriaClinica);
      });
    }
  }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrazabilidadAdmisionListaEsperaHistoriaClinicaService } from './trazabilidad-admision-lista-espera-historia-clinica.service';
import { TrazabilidadAdmisionListaEsperaHistoriaClinica } from './trazabilidad-admision-lista-espera-historia-clinica.model';

import { TrazabilidadAdmisionService } from '../trazabilidad-admision/trazabilidad-admision.service';
import { TrazabilidadAdmision } from '../trazabilidad-admision/trazabilidad-admision.model';

@Component({
  selector: 'app-trazabilidad-admision-lista-espera-historia-clinica-upsert',
  templateUrl: './trazabilidad-admision-lista-espera-historia-clinica-upsert.component.html'
})
export class TrazabilidadAdmisionListaEsperaHistoriaClinicaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  trazabilidadAdmisionListaEsperaHistoriaClinica: TrazabilidadAdmisionListaEsperaHistoriaClinica;

  /** Many-To-One Relationships */
  trazabilidadAdmisions: TrazabilidadAdmision[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trazabilidadAdmisionListaEsperaHistoriaClinicaService: TrazabilidadAdmisionListaEsperaHistoriaClinicaService,
    private trazabilidadAdmisionService: TrazabilidadAdmisionService,
  ) { }

  ngOnInit() {
    this.trazabilidadAdmisionService.getAll().subscribe(trazabilidadAdmisions => this.trazabilidadAdmisions = trazabilidadAdmisions);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.trazabilidadAdmisionListaEsperaHistoriaClinicaService.getById(id).subscribe(trazabilidadAdmisionListaEsperaHistoriaClinica => this.trazabilidadAdmisionListaEsperaHistoriaClinica = trazabilidadAdmisionListaEsperaHistoriaClinica);
      }
    });
  }

  save(formValues) {
    this.trazabilidadAdmisionListaEsperaHistoriaClinica = formValues;
    this.trazabilidadAdmisionListaEsperaHistoriaClinicaService.insert(this.trazabilidadAdmisionListaEsperaHistoriaClinica).subscribe(
      (response) => {
        this.router.navigate(['/entities/trazabilidad-admision-lista-espera-historia-clinica']);
      }
    );
  }

  update() {
    this.trazabilidadAdmisionListaEsperaHistoriaClinicaService.update(this.trazabilidadAdmisionListaEsperaHistoriaClinica._id, this.trazabilidadAdmisionListaEsperaHistoriaClinica).subscribe(
      (response) => {
        this.router.navigate(['/entities/trazabilidad-admision-lista-espera-historia-clinica']);
      }
    );
  }
}

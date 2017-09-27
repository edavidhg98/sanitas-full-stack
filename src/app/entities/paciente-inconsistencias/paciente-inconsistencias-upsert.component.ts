import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PacienteInconsistenciasService } from './paciente-inconsistencias.service';
import { PacienteInconsistencias } from './paciente-inconsistencias.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-paciente-inconsistencias-upsert',
  templateUrl: './paciente-inconsistencias-upsert.component.html'
})
export class PacienteInconsistenciasUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  pacienteInconsistencias: PacienteInconsistencias;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteInconsistenciasService: PacienteInconsistenciasService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.pacienteInconsistenciasService.getById(id).subscribe(pacienteInconsistencias => this.pacienteInconsistencias = pacienteInconsistencias);
      }
    });
  }

  save(formValues) {
    this.pacienteInconsistencias = formValues;
    this.pacienteInconsistenciasService.insert(this.pacienteInconsistencias).subscribe(
      (response) => {
        this.router.navigate(['/entities/paciente-inconsistencias']);
      }
    );
  }

  update() {
    this.pacienteInconsistenciasService.update(this.pacienteInconsistencias._id, this.pacienteInconsistencias).subscribe(
      (response) => {
        this.router.navigate(['/entities/paciente-inconsistencias']);
      }
    );
  }
}

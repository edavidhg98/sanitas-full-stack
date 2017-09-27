import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TiposDocumentoEntidadService } from './tipos-documento-entidad.service';
import { TiposDocumentoEntidad } from './tipos-documento-entidad.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { TipoPlanService } from '../tipo-plan/tipo-plan.service';
import { TipoPlan } from '../tipo-plan/tipo-plan.model';

@Component({
  selector: 'app-tipos-documento-entidad-upsert',
  templateUrl: './tipos-documento-entidad-upsert.component.html'
})
export class TiposDocumentoEntidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tiposDocumentoEntidad: TiposDocumentoEntidad;

  /** Many-To-One Relationships */
  entidads: Entidad[];
  tipoPlans: TipoPlan[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tiposDocumentoEntidadService: TiposDocumentoEntidadService,
    private entidadService: EntidadService,
    private tipoPlanService: TipoPlanService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.tipoPlanService.getAll().subscribe(tipoPlans => this.tipoPlans = tipoPlans);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tiposDocumentoEntidadService.getById(id).subscribe(tiposDocumentoEntidad => this.tiposDocumentoEntidad = tiposDocumentoEntidad);
      }
    });
  }

  save(formValues) {
    this.tiposDocumentoEntidad = formValues;
    this.tiposDocumentoEntidadService.insert(this.tiposDocumentoEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipos-documento-entidad']);
      }
    );
  }

  update() {
    this.tiposDocumentoEntidadService.update(this.tiposDocumentoEntidad._id, this.tiposDocumentoEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipos-documento-entidad']);
      }
    );
  }
}

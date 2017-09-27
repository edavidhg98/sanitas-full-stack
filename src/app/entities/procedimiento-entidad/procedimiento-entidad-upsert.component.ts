import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientoEntidadService } from './procedimiento-entidad.service';
import { ProcedimientoEntidad } from './procedimiento-entidad.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-procedimiento-entidad-upsert',
  templateUrl: './procedimiento-entidad-upsert.component.html'
})
export class ProcedimientoEntidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimientoEntidad: ProcedimientoEntidad;

  /** Many-To-One Relationships */
  entidads: Entidad[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientoEntidadService: ProcedimientoEntidadService,
    private entidadService: EntidadService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientoEntidadService.getById(id).subscribe(procedimientoEntidad => this.procedimientoEntidad = procedimientoEntidad);
      }
    });
  }

  save(formValues) {
    this.procedimientoEntidad = formValues;
    this.procedimientoEntidadService.insert(this.procedimientoEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-entidad']);
      }
    );
  }

  update() {
    this.procedimientoEntidadService.update(this.procedimientoEntidad._id, this.procedimientoEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-entidad']);
      }
    );
  }
}

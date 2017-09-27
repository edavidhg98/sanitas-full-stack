import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientoFinalidadService } from './procedimiento-finalidad.service';
import { ProcedimientoFinalidad } from './procedimiento-finalidad.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-procedimiento-finalidad-upsert',
  templateUrl: './procedimiento-finalidad-upsert.component.html'
})
export class ProcedimientoFinalidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimientoFinalidad: ProcedimientoFinalidad;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientoFinalidadService: ProcedimientoFinalidadService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientoFinalidadService.getById(id).subscribe(procedimientoFinalidad => this.procedimientoFinalidad = procedimientoFinalidad);
      }
    });
  }

  save(formValues) {
    this.procedimientoFinalidad = formValues;
    this.procedimientoFinalidadService.insert(this.procedimientoFinalidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-finalidad']);
      }
    );
  }

  update() {
    this.procedimientoFinalidadService.update(this.procedimientoFinalidad._id, this.procedimientoFinalidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-finalidad']);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CitaRetrasoService } from './cita-retraso.service';
import { CitaRetraso } from './cita-retraso.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-cita-retraso-upsert',
  templateUrl: './cita-retraso-upsert.component.html'
})
export class CitaRetrasoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  citaRetraso: CitaRetraso;

  /** Many-To-One Relationships */
  entidads: Entidad[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private citaRetrasoService: CitaRetrasoService,
    private entidadService: EntidadService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.citaRetrasoService.getById(id).subscribe(citaRetraso => this.citaRetraso = citaRetraso);
      }
    });
  }

  save(formValues) {
    this.citaRetraso = formValues;
    this.citaRetrasoService.insert(this.citaRetraso).subscribe(
      (response) => {
        this.router.navigate(['/entities/cita-retraso']);
      }
    );
  }

  update() {
    this.citaRetrasoService.update(this.citaRetraso._id, this.citaRetraso).subscribe(
      (response) => {
        this.router.navigate(['/entities/cita-retraso']);
      }
    );
  }
}

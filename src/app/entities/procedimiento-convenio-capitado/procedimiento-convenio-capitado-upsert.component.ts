import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientoConvenioCapitadoService } from './procedimiento-convenio-capitado.service';
import { ProcedimientoConvenioCapitado } from './procedimiento-convenio-capitado.model';

import { SucursalEntidadService } from '../sucursal-entidad/sucursal-entidad.service';
import { SucursalEntidad } from '../sucursal-entidad/sucursal-entidad.model';
import { TipoAdmisionService } from '../tipo-admision/tipo-admision.service';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-procedimiento-convenio-capitado-upsert',
  templateUrl: './procedimiento-convenio-capitado-upsert.component.html'
})
export class ProcedimientoConvenioCapitadoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimientoConvenioCapitado: ProcedimientoConvenioCapitado;

  /** Many-To-One Relationships */
  sucursalEntidads: SucursalEntidad[];
  tipoAdmisions: TipoAdmision[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientoConvenioCapitadoService: ProcedimientoConvenioCapitadoService,
    private sucursalEntidadService: SucursalEntidadService,
    private tipoAdmisionService: TipoAdmisionService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.sucursalEntidadService.getAll().subscribe(sucursalEntidads => this.sucursalEntidads = sucursalEntidads);
    this.tipoAdmisionService.getAll().subscribe(tipoAdmisions => this.tipoAdmisions = tipoAdmisions);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientoConvenioCapitadoService.getById(id).subscribe(procedimientoConvenioCapitado => this.procedimientoConvenioCapitado = procedimientoConvenioCapitado);
      }
    });
  }

  save(formValues) {
    this.procedimientoConvenioCapitado = formValues;
    this.procedimientoConvenioCapitadoService.insert(this.procedimientoConvenioCapitado).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-convenio-capitado']);
      }
    );
  }

  update() {
    this.procedimientoConvenioCapitadoService.update(this.procedimientoConvenioCapitado._id, this.procedimientoConvenioCapitado).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-convenio-capitado']);
      }
    );
  }
}

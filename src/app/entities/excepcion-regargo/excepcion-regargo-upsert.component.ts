import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ExcepcionRegargoService } from './excepcion-regargo.service';
import { ExcepcionRegargo } from './excepcion-regargo.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { TipoAdmisionService } from '../tipo-admision/tipo-admision.service';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-excepcion-regargo-upsert',
  templateUrl: './excepcion-regargo-upsert.component.html'
})
export class ExcepcionRegargoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  excepcionRegargo: ExcepcionRegargo;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  tipoAdmisions: TipoAdmision[];
  entidads: Entidad[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private excepcionRegargoService: ExcepcionRegargoService,
    private sucursalService: SucursalService,
    private tipoAdmisionService: TipoAdmisionService,
    private entidadService: EntidadService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.tipoAdmisionService.getAll().subscribe(tipoAdmisions => this.tipoAdmisions = tipoAdmisions);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.excepcionRegargoService.getById(id).subscribe(excepcionRegargo => this.excepcionRegargo = excepcionRegargo);
      }
    });
  }

  save(formValues) {
    this.excepcionRegargo = formValues;
    this.excepcionRegargoService.insert(this.excepcionRegargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/excepcion-regargo']);
      }
    );
  }

  update() {
    this.excepcionRegargoService.update(this.excepcionRegargo._id, this.excepcionRegargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/excepcion-regargo']);
      }
    );
  }
}

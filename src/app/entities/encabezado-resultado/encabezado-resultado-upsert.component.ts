import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EncabezadoResultadoService } from './encabezado-resultado.service';
import { EncabezadoResultado } from './encabezado-resultado.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-encabezado-resultado-upsert',
  templateUrl: './encabezado-resultado-upsert.component.html'
})
export class EncabezadoResultadoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  encabezadoResultado: EncabezadoResultado;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private encabezadoResultadoService: EncabezadoResultadoService,
    private sucursalService: SucursalService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.encabezadoResultadoService.getById(id).subscribe(encabezadoResultado => this.encabezadoResultado = encabezadoResultado);
      }
    });
  }

  save(formValues) {
    this.encabezadoResultado = formValues;
    this.encabezadoResultadoService.insert(this.encabezadoResultado).subscribe(
      (response) => {
        this.router.navigate(['/entities/encabezado-resultado']);
      }
    );
  }

  update() {
    this.encabezadoResultadoService.update(this.encabezadoResultado._id, this.encabezadoResultado).subscribe(
      (response) => {
        this.router.navigate(['/entities/encabezado-resultado']);
      }
    );
  }
}

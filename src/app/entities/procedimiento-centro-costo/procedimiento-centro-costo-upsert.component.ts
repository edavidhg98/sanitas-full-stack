import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientoCentroCostoService } from './procedimiento-centro-costo.service';
import { ProcedimientoCentroCosto } from './procedimiento-centro-costo.model';

import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-procedimiento-centro-costo-upsert',
  templateUrl: './procedimiento-centro-costo-upsert.component.html'
})
export class ProcedimientoCentroCostoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimientoCentroCosto: ProcedimientoCentroCosto;

  /** Many-To-One Relationships */
  prestadors: Prestador[];
  sucursals: Sucursal[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientoCentroCostoService: ProcedimientoCentroCostoService,
    private prestadorService: PrestadorService,
    private sucursalService: SucursalService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientoCentroCostoService.getById(id).subscribe(procedimientoCentroCosto => this.procedimientoCentroCosto = procedimientoCentroCosto);
      }
    });
  }

  save(formValues) {
    this.procedimientoCentroCosto = formValues;
    this.procedimientoCentroCostoService.insert(this.procedimientoCentroCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-centro-costo']);
      }
    );
  }

  update() {
    this.procedimientoCentroCostoService.update(this.procedimientoCentroCosto._id, this.procedimientoCentroCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-centro-costo']);
      }
    );
  }
}

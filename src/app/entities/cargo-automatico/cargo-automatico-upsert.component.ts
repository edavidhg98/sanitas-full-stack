import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CargoAutomaticoService } from './cargo-automatico.service';
import { CargoAutomatico } from './cargo-automatico.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-cargo-automatico-upsert',
  templateUrl: './cargo-automatico-upsert.component.html'
})
export class CargoAutomaticoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  cargoAutomatico: CargoAutomatico;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  entidads: Entidad[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cargoAutomaticoService: CargoAutomaticoService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.cargoAutomaticoService.getById(id).subscribe(cargoAutomatico => this.cargoAutomatico = cargoAutomatico);
      }
    });
  }

  save(formValues) {
    this.cargoAutomatico = formValues;
    this.cargoAutomaticoService.insert(this.cargoAutomatico).subscribe(
      (response) => {
        this.router.navigate(['/entities/cargo-automatico']);
      }
    );
  }

  update() {
    this.cargoAutomaticoService.update(this.cargoAutomatico._id, this.cargoAutomatico).subscribe(
      (response) => {
        this.router.navigate(['/entities/cargo-automatico']);
      }
    );
  }
}

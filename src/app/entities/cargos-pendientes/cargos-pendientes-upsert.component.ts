import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CargosPendientesService } from './cargos-pendientes.service';
import { CargosPendientes } from './cargos-pendientes.model';

import { PrioridadService } from '../prioridad/prioridad.service';
import { Prioridad } from '../prioridad/prioridad.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-cargos-pendientes-upsert',
  templateUrl: './cargos-pendientes-upsert.component.html'
})
export class CargosPendientesUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  cargosPendientes: CargosPendientes;

  /** Many-To-One Relationships */
  prioridads: Prioridad[];
  sucursals: Sucursal[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cargosPendientesService: CargosPendientesService,
    private prioridadService: PrioridadService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.prioridadService.getAll().subscribe(prioridads => this.prioridads = prioridads);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.cargosPendientesService.getById(id).subscribe(cargosPendientes => this.cargosPendientes = cargosPendientes);
      }
    });
  }

  save(formValues) {
    this.cargosPendientes = formValues;
    this.cargosPendientesService.insert(this.cargosPendientes).subscribe(
      (response) => {
        this.router.navigate(['/entities/cargos-pendientes']);
      }
    );
  }

  update() {
    this.cargosPendientesService.update(this.cargosPendientes._id, this.cargosPendientes).subscribe(
      (response) => {
        this.router.navigate(['/entities/cargos-pendientes']);
      }
    );
  }
}
